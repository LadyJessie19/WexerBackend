"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * It's meant for the internal server errors.
 * @param error pass the error object here.
 * @returns an object for the request response.
 */
const serverError = (error, flag) => {
    return {
        message: error.message || "Internal server error.",
        statusCode: error.message ? 400 : 500,
        flag
    };
};
exports.default = serverError;
