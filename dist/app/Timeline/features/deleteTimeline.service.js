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
function deleteTimeline(id, repository) {
    return __awaiter(this, void 0, void 0, function* () {
        repository.deleteRep(id);
        try {
            return (0, SuccessHandler_1.default)("The timeline was successfully removed", 200);
        }
        catch (error) {
            return (0, ServerError_1.default)(error);
        }
    });
}
exports.default = deleteTimeline;
