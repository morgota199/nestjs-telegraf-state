import { ExecutionContext, Logger, createParamDecorator } from '@nestjs/common';
import { TelegramSceneType } from './types/scene-type';
import { StateOptions } from './types/state.options';
import 'reflect-metadata';

export const State = createParamDecorator(
  <T>(entity: { new(...args: any[]): T }, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<TelegramSceneType>();

    const logger: Logger = new Logger(entity.name);
    const options: StateOptions = Reflect.getMetadata(
      'options',
      entity.prototype,
    );

    const state = request.scene.session.state;

    if (options.log) {
      logger.debug('Init Entity', JSON.stringify(state, null, 2));
    }

    if (options.context) {
      return new entity(state, request);
    } else {
      return new entity(state);
    }
  },
);
