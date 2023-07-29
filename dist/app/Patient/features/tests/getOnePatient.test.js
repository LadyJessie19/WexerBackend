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
const getOnePatient_service_1 = __importDefault(require("../getOnePatient.service"));
const PatientModule_1 = __importDefault(require("../../PatientModule"));
const repository = PatientModule_1.default.build().repository;
const id = "yN9HjL3oXxR7gFtDcVbAqW2e";
test('should return one item from patient collection', () => __awaiter(void 0, void 0, void 0, function* () {
    const mock = {
        message: 'The pacient was successfully found.',
        statusCode: 200
    };
    jest.spyOn(repository, 'getOneRep').mockResolvedValue(mock);
    const result = yield (0, getOnePatient_service_1.default)(id, repository);
    expect(result.statusCode).toBe(mock.statusCode);
    expect(result.message).toBe(mock.message);
}));
test('shouldn`t return any patient', () => __awaiter(void 0, void 0, void 0, function* () {
    const mock = {
        message: `The patient with the id ${id} wasn't found.`,
        statusCode: 404
    };
    jest.spyOn(repository, 'getOneRep').mockReturnValue(undefined);
    const result = yield (0, getOnePatient_service_1.default)(id, repository);
    expect(result.statusCode).toBe(mock.statusCode);
    expect(result.message).toBe(mock.message);
}));
