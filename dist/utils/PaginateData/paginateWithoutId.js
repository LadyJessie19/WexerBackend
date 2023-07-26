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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The PaginateData function is splited in two smaller functions: paginateWithId and paginateWithoutId.
 * @param skip how many items should be skiped at the database.
 * @param limit The limitation to the items that will be returned in the request.
 * @param repository The repository that will be manipulated.
 * @returns a object with the totalItems and the result.
 */
function paginateWithoutId(skip, limit, repository) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield repository.getAllRep(skip, limit);
        return result;
    });
}
exports.default = paginateWithoutId;
