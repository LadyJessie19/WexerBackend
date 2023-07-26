"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class TokenHandler {
    constructor(secretKey) {
        this.secretKey = secretKey;
    }
    /**
     * Validate the authenticity of a JWT token
     * @param token
     * @param options
     * @returns
     */
    verify(token, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return jsonwebtoken_1.default.verify(token, this.secretKey, options);
        });
    }
    /**
     * Decode a JWT token to extract the token payload
     * @param token
     * @param options
     * @returns
     */
    decode(token, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return jsonwebtoken_1.default.decode(token, options);
        });
    }
    /**
     * Generate a new JWT token based on the provided payload
     * @param payload
     * @param options
     * @returns
     */
    sign(payload, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return jsonwebtoken_1.default.sign(payload, this.secretKey, options);
        });
    }
}
exports.default = TokenHandler;
