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
const ServerError_1 = __importDefault(require("../../../utils/ServerError"));
const SuccessHandler_1 = __importDefault(require("../../../utils/SuccessHandler"));
const PaginateData_1 = __importDefault(require("../../../utils/PaginateData"));
function getAllUsers(page, limit, repository) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { message, statusCode, pageInfo, result } = yield (0, PaginateData_1.default)(page, limit, 'psychologist', repository);
            const payload = { pageInfo, result };
            return (0, SuccessHandler_1.default)(message, statusCode, payload);
        }
        catch (error) {
            return (0, ServerError_1.default)(error, "getAllUsers catch");
        }
    });
}
exports.default = getAllUsers;
