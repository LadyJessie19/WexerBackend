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
const UserModule_1 = __importDefault(require("../../UserModule"));
const deleteUser_service_1 = __importDefault(require("./../deleteUser.service"));
const repository = UserModule_1.default.build().repository;
const id = "yN9HjL3oXxR7gFtDcVbAqW2e";
test('should delete the user by the id', () => __awaiter(void 0, void 0, void 0, function* () {
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
        message: "The psychologist was successfully removed.",
        statusCode: 200
    };
    jest.spyOn(repository, 'deleteRep').mockResolvedValue(mock);
    const result = yield (0, deleteUser_service_1.default)(id, repository);
    expect(result.statusCode).toBe(expectedResult.statusCode);
    expect(result.message).toBe(expectedResult.message);
}));
test('should return a error when deleting the user by id', () => __awaiter(void 0, void 0, void 0, function* () {
    const expectedResult = {
        message: "The psychologist couldn`t be removed. Please, check the current mongoDB ID.",
        statusCode: 400
    };
    jest.spyOn(repository, 'deleteRep').mockResolvedValue(null);
    const result = yield (0, deleteUser_service_1.default)(id, repository);
    expect(result.statusCode).toBe(expectedResult.statusCode);
    expect(result.message).toBe(expectedResult.message);
}));
