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
const DataEncrypt_1 = __importDefault(require("../../utils/DataEncrypt"));
const TokenHandler_1 = __importDefault(require("../../utils/TokenHandler"));
const ErrorHandler_1 = __importDefault(require("../../utils/ErrorHandler"));
const ServerError_1 = __importDefault(require("../../utils/ServerError"));
const SuccessHandler_1 = __importDefault(require("../../utils/SuccessHandler"));
dotenv_1.default.config();
class AuthService {
    constructor(repository) {
        this.repository = repository;
    }
    authSer(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = body;
            const secretKey = process.env.SECRET_KEY;
            const currentToken = new TokenHandler_1.default(secretKey);
            try {
                const user = yield this.repository.findByEmailRep(email);
                if (!user) {
                    return (0, ErrorHandler_1.default)("Not valid email/password.", 403, "!user");
                }
                const isThePasswordValid = DataEncrypt_1.default.compare(password, user.password);
                if (!isThePasswordValid) {
                    return (0, ErrorHandler_1.default)("Not valid email/password.", 403, "!isThePasswordValid");
                }
                const payload = {
                    userId: user._id,
                    name: user.name,
                    email: user.email
                };
                const options = {
                    expiresIn: "7d",
                };
                const token = yield currentToken.sign(payload, options);
                return (0, SuccessHandler_1.default)("Login was successfully. Token created.", 200, undefined, token);
            }
            catch (error) {
                return (0, ServerError_1.default)(error, "Auth service catch");
            }
        });
    }
}
exports.default = AuthService;
