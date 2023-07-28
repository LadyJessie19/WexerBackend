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
const paginateWithId_1 = __importDefault(require("./paginateWithId"));
const paginateWithoutId_1 = __importDefault(require("./paginateWithoutId"));
/**
 * This is a simple paginate function. I'm still using mongoose features but I wanted to make this part of my project more functional and more reusable.
 * @param page The query page variable comes in here.
 * @param limit The items limitation per page.
 * @param entityName The entity name that should be used.
 * @param repository The repository that will be manipulated.
 * @param findId If there is an id to search from a specific collection, you must place it here. Not a mandatory parameter.
 * @returns a object with a message, statusCode and the requisition result.
 */
function PaginateData(page, limit, entityName, repository, findId) {
    return __awaiter(this, void 0, void 0, function* () {
        const skip = (page - 1) * limit;
        let paginatedData;
        if (findId) {
            paginatedData = yield (0, paginateWithId_1.default)(findId, skip, limit, repository);
        }
        else {
            paginatedData = yield (0, paginateWithoutId_1.default)(skip, limit, repository);
        }
        const { totalItems, result } = paginatedData;
        const entityCall = totalItems < 2 ? `${entityName}` : `${entityName}s`;
        const contentCall = totalItems < 2 ? `There is` : `There are`;
        const totalPages = Math.ceil(totalItems / limit);
        const answerToGetAll = `${contentCall} ${totalItems} ${entityCall} at the database.`;
        const answerToGetFromParent = `${contentCall} ${totalItems} ${entityCall} from the id ${findId}.`;
        let message;
        let statusCode;
        if (totalItems < 1) {
            message = `There are no ${entityName}s at this collection.`;
            statusCode = 404;
            return { message, statusCode };
        }
        else if (page > totalPages) {
            message = `The current page is empty. Return to page ${totalPages}.`;
            statusCode = 404;
            return { message, statusCode };
        }
        else {
            message = findId ? answerToGetFromParent : answerToGetAll;
            statusCode = 200;
        }
        const pageInfo = {
            totalPages,
            limitPerPage: limit,
            currentPage: Number(page)
        };
        return {
            message: message,
            statusCode: statusCode,
            pageInfo,
            result
        };
    });
}
exports.default = PaginateData;
