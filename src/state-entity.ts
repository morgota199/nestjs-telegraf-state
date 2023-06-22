import { StateOptions } from './types/state.options';
import 'reflect-metadata';

export const StateEntity = (options: StateOptions = {}): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata('options', options, target.prototype);

    return target;
  };
};
