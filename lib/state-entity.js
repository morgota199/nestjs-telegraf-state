"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateEntity = void 0;
require("reflect-metadata");
const StateEntity = (options = {}) => {
    return (target) => {
        Reflect.defineMetadata('options', options, target.prototype);
        return target;
    };
};
exports.StateEntity = StateEntity;
