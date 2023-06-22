/**
 * Registers middleware for handling text messages.
 *
 * @see https://telegraf.js.org/#/?id=hears
 */
export declare const Hears: (...args: [string] | [RegExp] | [(value: string, ctx: never) => RegExpExecArray] | [(string | RegExp | ((value: string, ctx: never) => RegExpExecArray))[]]) => MethodDecorator;
