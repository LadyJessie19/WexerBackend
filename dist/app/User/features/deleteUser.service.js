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
const SuccessHandler_1 = __importDefault(require("../../../utils/SuccessHandler"));
const index_1 = __importDefault(require("../../../utils/ErrorHandler/index"));
function deleteUser(id, repository) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield repository.deleteRep(id);
        if (!result) {
            return (0, index_1.default)('The psychologist couldn`t be removed. Please, check the current mongoDB ID.', 400);
        }
        return (0, SuccessHandler_1.default)('The psychologist was successfully removed.', 200);
    });
}
exports.default = deleteUser;
