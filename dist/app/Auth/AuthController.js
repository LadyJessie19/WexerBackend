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
const AuthSchema_1 = __importDefault(require("./AuthSchema"));
const ErrorHandler_1 = __importDefault(require("../../utils/ErrorHandler"));
class AuthController {
    constructor(service) {
        this.service = service;
    }
    authCon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            try {
                yield AuthSchema_1.default.login().validate(body);
            }
            catch (err) {
                return res.status(400).json((0, ErrorHandler_1.default)(err.errors, 400, "Yup Schema"));
            }
            const result = yield this.service.authSer(body);
            return res.status(result.statusCode).json(result);
        });
    }
}
exports.default = AuthController;
