import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { TelegramSceneType } from './types';

export const Match = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx
      .switchToHttp()
      .getRequest<TelegramSceneType & { match: RegExpMatchArray }>();

    return request.match;
  },
);
