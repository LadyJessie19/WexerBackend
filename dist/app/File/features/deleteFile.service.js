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
function deleteFile(id, repository, occurrenceRep) {
    return __awaiter(this, void 0, void 0, function* () {
        const file = yield repository.getOneRep(id);
        if (file) {
            yield repository.deleteRep(id);
            yield occurrenceRep.pullFile(file === null || file === void 0 ? void 0 : file.occurrenceId, id);
            return (0, SuccessHandler_1.default)('The file was successfully removed.', 200);
        }
        return (0, index_1.default)('The file couldn`t be removed. Please, check the current mongoDB ID.', 400);
    });
}
exports.default = deleteFile;
