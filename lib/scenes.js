"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scene = exports.Wizard = void 0;
const nestjs_telegraf_1 = require("nestjs-telegraf");
const Wizard = (options) => {
    return (target) => {
        target['in'] = (context, state) => {
            return context.scene.enter(target.name, state);
        };
        return (0, nestjs_telegraf_1.Wizard)(target.name, options)(target);
    };
};
exports.Wizard = Wizard;
const Scene = (options) => {
    return (target) => {
        target['in'] = (context, state) => {
            return context.scene.enter(target.name, state);
        };
        return (0, nestjs_telegraf_1.Scene)(target.name, options)(target);
    };
};
exports.Scene = Scene;
