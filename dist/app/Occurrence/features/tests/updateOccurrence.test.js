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
const OccurrenceModule_1 = __importDefault(require("../../OccurrenceModule"));
const updateOccurrence_service_1 = __importDefault(require("./../updateOccurrence.service"));
const repository = OccurrenceModule_1.default.build().repository;
const id = "yN9HjL3oXxR7gFtDcVbAqW2e";
test('should update the Occurrence by the id', () => __awaiter(void 0, void 0, void 0, function* () {
    const mock = {
        _id: '',
        name: '',
        nickname: '',
        email: '',
        patients: [],
        createdAt: '',
        updatedAt: '',
        __v: 0
    };
    const expectedResult = {
        message: "The occurrence was successfully updated!",
        statusCode: 200
    };
    const body = { key: "value" };
    jest.spyOn(repository, 'updateRep').mockResolvedValue(mock);
    const result = yield (0, updateOccurrence_service_1.default)(id, body, repository);
    expect(result.statusCode).toBe(expectedResult.statusCode);
    expect(result.message).toBe(expectedResult.message);
}));
