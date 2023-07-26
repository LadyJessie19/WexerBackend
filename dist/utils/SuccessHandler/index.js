"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * It's for the return messages. It spares code lines.
 * @param message Set your request message here.
 * @param statusCode Now, the request status code.
 * @param data This parameter is optional. You can place any object in here.
 * @returns a return object
 */
const newSuccess = (message, statusCode, data, token) => {
    return {
        message,
        statusCode,
        data,
        token
    };
};
exports.default = newSuccess;
