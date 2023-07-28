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
const ErrorHandler_1 = __importDefault(require("../../../utils/ErrorHandler"));
const ServerError_1 = __importDefault(require("../../../utils/ServerError"));
const SuccessHandler_1 = __importDefault(require("../../../utils/SuccessHandler"));
const DataEncrypt_1 = __importDefault(require("../../../utils/DataEncrypt"));
function createUser(payload, repository) {
    return __awaiter(this, void 0, void 0, function* () {
        const isAnOldUser = yield repository.findByEmailRep(payload.email);
        if (isAnOldUser) {
            return (0, ErrorHandler_1.default)('A psychologist with this email already exists', 400, "isAnOldUser");
        }
        const nicknameExists = yield repository.findByNicknameRep(payload.nickname);
        if (nicknameExists) {
            return (0, ErrorHandler_1.default)('This nickname isn`t available. Try another one, please.', 400, 'nicknameExists');
        }
        try {
            const passwordHashed = DataEncrypt_1.default.hash(payload.password, 8);
            const user = Object.assign(Object.assign({}, payload), { password: passwordHashed });
            const result = yield repository.createRep(user);
            return (0, SuccessHandler_1.default)("Psychologist created with success!", 201, result);
        }
        catch (error) {
            if (error.errors) {
                return (0, ErrorHandler_1.default)(error.message, 400, "createUser catch");
            }
            return (0, ServerError_1.default)(error);
        }
    });
}
exports.default = createUser;
