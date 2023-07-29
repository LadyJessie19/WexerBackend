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
const getFromOccurrence_service_1 = __importDefault(require("../getFromOccurrence.service"));
const FileModule_1 = __importDefault(require("../../FileModule"));
const repository = FileModule_1.default.build().repository;
const id = "yN9HjL3oXxR7gFtDcVbAqW2e";
const mock = {
    message: 'Data fetched successfully',
    statusCode: 200,
    pageInfo: { currentPage: 1, totalPages: 3, hasNextPage: true },
    result: [{ id: '1', name: 'item 1' }, { id: '2', name: 'item 2' }],
};
test('should return the files from the choosen id', () => __awaiter(void 0, void 0, void 0, function* () {
    const page = 1;
    const limit = 2;
    jest.spyOn(repository, 'getFromParentRep').mockResolvedValue(mock);
    const result = yield (0, getFromOccurrence_service_1.default)(id, page, limit, repository);
    expect(result.statusCode).toBe(mock.statusCode);
}));
