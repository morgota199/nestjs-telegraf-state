import {
  Wizard as TelegrafWizard,
  Scene as TelegrafScene,
} from 'nestjs-telegraf';
import { SceneOptions } from 'telegraf/typings/scenes/base';
import { TelegramSceneType } from './types';

export const Wizard = (options?: SceneOptions<any>): ClassDecorator => {
  return (target: any) => {
    target['in'] = (context: TelegramSceneType, state: any) => {
      return context.scene.enter(target.name, state);
    };

    return TelegrafWizard(target.name, options)(target);
  };
};

export const Scene = (options?: SceneOptions<any>): ClassDecorator => {
  return (target: any) => {
    target['in'] = (context: TelegramSceneType, state: any) => {
      return context.scene.enter(target.name, state);
    };

    return TelegrafScene(target.name, options)(target);
  };
};
