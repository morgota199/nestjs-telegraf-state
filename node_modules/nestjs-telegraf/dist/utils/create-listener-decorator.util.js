"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createListenerDecorator = void 0;
const telegraf_constants_1 = require("../telegraf.constants");
function createListenerDecorator(method) {
    return (...args) => {
        return (_target, _key, descriptor) => {
            const metadata = [
                {
                    method,
                    args,
                },
            ];
            const previousValue = Reflect.getMetadata(telegraf_constants_1.LISTENERS_METADATA, descriptor.value) || [];
            const value = [...previousValue, ...metadata];
            Reflect.defineMetadata(telegraf_constants_1.LISTENERS_METADATA, value, descriptor.value);
            return descriptor;
        };
    };
}
exports.createListenerDecorator = createListenerDecorator;
