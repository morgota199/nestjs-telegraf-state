"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
const common_1 = require("@nestjs/common");
exports.State = (0, common_1.createParamDecorator)((entity, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const logger = new common_1.Logger(entity.name);
    const options = Reflect.getMetadata('options', entity.prototype);
    const state = request.scene.session.state;
    if (options.log) {
        logger.debug("Init Entity", JSON.stringify(state, null, 2));
    }
    if (options.context) {
        return new entity(state, request);
    }
    else {
        return new entity(state);
    }
});
