"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBotFactory = void 0;
const telegraf_1 = require("telegraf");
async function createBotFactory(options) {
    var _a;
    const bot = new telegraf_1.Telegraf(options.token, options.options);
    bot.use(...((_a = options.middlewares) !== null && _a !== void 0 ? _a : []));
    if (options.launchOptions !== false) {
        bot.launch(options.launchOptions);
    }
    return bot;
}
exports.createBotFactory = createBotFactory;
