import { Composer, Middleware } from 'telegraf';
export declare type Filter<T extends any[], F> = T extends [] ? [] : T extends [infer Head, ...infer Tail] ? Head extends F ? Filter<Tail, F> : [Head, ...Filter<Tail, F>] : [];
export declare type OnlyFunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];
declare type ParametersOrNever<T> = T extends (...args: any[]) => any ? Parameters<T> : never;
export declare type ComposerMethodArgs<T extends Composer<never>, U extends OnlyFunctionPropertyNames<T> = OnlyFunctionPropertyNames<T>> = Filter<ParametersOrNever<T[U]>, Middleware<never>>;
export {};
