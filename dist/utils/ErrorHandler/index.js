"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is a simple utils function. It spares code lines.
 * @param message The request message. Nice to feedback the dev.
 * @param statusCode The request status should be in here.
 * @param flag This is to point were the error is coming from.
 * @returns a response object.
 */
const newError = (message, statusCode, flag) => {
    return {
        error: true,
        message,
        statusCode,
        flag
    };
};
exports.default = newError;
