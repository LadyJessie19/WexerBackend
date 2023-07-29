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
const TimelineModule_1 = __importDefault(require("../../../Timeline/TimelineModule"));
const OccurrenceModule_1 = __importDefault(require("../../OccurrenceModule"));
const createOccurrence_service_1 = __importDefault(require("../createOccurrence.service"));
const repository = OccurrenceModule_1.default.build().repository;
const parentRep = TimelineModule_1.default.build().repository;
const mock = { key: "value" };
test('should create a new occurrence', () => __awaiter(void 0, void 0, void 0, function* () {
    const expectedResult = {
        message: "The occurrence was created with success!",
        statusCode: 201,
        data: mock
    };
    jest.spyOn(repository, 'createRep').mockResolvedValue(expectedResult);
    jest.spyOn(parentRep, 'pushOccurrence').mockResolvedValue(mock);
    const result = yield (0, createOccurrence_service_1.default)(mock, repository, parentRep);
    expect(result.statusCode).toBe(expectedResult.statusCode);
    expect(result.message).toBe(expectedResult.message);
}));
test('should return an error when creating the occurrence', () => __awaiter(void 0, void 0, void 0, function* () {
    const expectedResult = {
        statusCode: 400,
        message: "Could not create occurrence."
    };
    jest.spyOn(repository, 'createRep').mockReturnValue(undefined);
    const result = yield (0, createOccurrence_service_1.default)(mock, repository, parentRep);
    expect(result.statusCode).toBe(expectedResult.statusCode);
    expect(result.message).toBe(expectedResult.message);
}));
