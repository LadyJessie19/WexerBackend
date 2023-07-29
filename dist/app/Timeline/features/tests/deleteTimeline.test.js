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
const TimelineModule_1 = __importDefault(require("../../TimelineModule"));
const PatientModule_1 = __importDefault(require("../../../Patient/PatientModule"));
const deleteTimeline_service_1 = __importDefault(require("../deleteTimeline.service"));
const repository = TimelineModule_1.default.build().repository;
const parentRep = PatientModule_1.default.build().repository;
const id = "64c1707d5db4e52ad77d8458";
const mock = { key: "value" };
test('should delete the timeline by the id', () => __awaiter(void 0, void 0, void 0, function* () {
    const expectedResult = {
        message: "The timeline was successfully removed.",
        statusCode: 200
    };
    jest.spyOn(repository, 'getOneRep').mockResolvedValue(mock);
    jest.spyOn(repository, 'deleteRep').mockResolvedValue(mock);
    jest.spyOn(parentRep, 'pullTimeline').mockResolvedValue(mock);
    const result = yield (0, deleteTimeline_service_1.default)(id, repository, parentRep);
    expect(result.statusCode).toBe(expectedResult.statusCode);
    expect(result.message).toBe(expectedResult.message);
}));
test('should return a error when deleting the timeline by id', () => __awaiter(void 0, void 0, void 0, function* () {
    const expectedResult = {
        message: "The timeline couldn`t be removed. Please, check the current mongoDB ID.",
        statusCode: 400
    };
    jest.spyOn(repository, 'getOneRep').mockResolvedValue(null);
    const result = yield (0, deleteTimeline_service_1.default)(id, repository, parentRep);
    expect(result.statusCode).toBe(expectedResult.statusCode);
    expect(result.message).toBe(expectedResult.message);
}));
