import { Telegraf } from 'telegraf';
export declare type AllBotsMap = Map<string, Telegraf<any>>;
export declare const InjectAllBots: () => ParameterDecorator;
