/**
 * Registers middleware for handling inline_query actions with regular expressions.
 *
 * @see https://telegraf.js.org/#/?id=inlinequery
 */
export declare const InlineQuery: (...args: [string] | [RegExp] | [(value: string, ctx: never) => RegExpExecArray] | [(string | RegExp | ((value: string, ctx: never) => RegExpExecArray))[]]) => MethodDecorator;
