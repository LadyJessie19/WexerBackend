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
const dotenv_1 = __importDefault(require("dotenv"));
const ErrorHandler_1 = __importDefault(require("../../utils/ErrorHandler"));
const TokenHandler_1 = __importDefault(require("../../utils/TokenHandler"));
dotenv_1.default.config();
class AuthenticateMiddleware {
    static checkToken(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { headers: { authorization = null } } = req;
            const secretKey = process.env.SECRET_KEY;
            const currentToken = new TokenHandler_1.default(secretKey);
            if (!authorization) {
                return res.status(401).json((0, ErrorHandler_1.default)('Not authorized.', 401, "!authorization"));
            }
            const [, token] = authorization.split(" ");
            try {
                yield currentToken.verify(token);
                req.user = (yield currentToken.decode(token));
            }
            catch (error) {
                return res.status(401).json((0, ErrorHandler_1.default)("Invalid token", 401, "AuthMiddle catch"));
            }
            next();
        });
    }
}
exports.default = AuthenticateMiddleware;
