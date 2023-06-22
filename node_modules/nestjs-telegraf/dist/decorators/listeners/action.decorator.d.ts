/**
 * Registers middleware for handling callback_data actions with regular expressions.
 *
 * @see https://telegraf.js.org/#/?id=action
 */
export declare const Action: (...args: [string] | [RegExp] | [(value: string, ctx: never) => RegExpExecArray] | [(string | RegExp | ((value: string, ctx: never) => RegExpExecArray))[]]) => MethodDecorator;
