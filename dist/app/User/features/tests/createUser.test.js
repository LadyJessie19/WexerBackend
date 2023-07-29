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
const createUser_service_1 = __importDefault(require("../createUser.service"));
const repository = UserModule_1.default.build().repository;
const mock = { email: 'email@email.com', password: '123456', name: 'Someone Someonderson', nickname: 'Mustard' };
test('should create a new user', () => __awaiter(void 0, void 0, void 0, function* () {
    const expectedResult = {
        message: "The psychologist was created with success!",
        statusCode: 201,
        data: mock
    };
    jest.spyOn(repository, 'findByEmailRep').mockResolvedValue(undefined);
    jest.spyOn(repository, 'findByNicknameRep').mockResolvedValue(undefined);
    jest.spyOn(repository, 'createRep').mockResolvedValue(expectedResult);
    const result = yield (0, createUser_service_1.default)(mock, repository);
    expect(result.statusCode).toBe(expectedResult.statusCode);
    expect(result.message).toBe(expectedResult.message);
}));
test('should return an error when the email is already being used', () => __awaiter(void 0, void 0, void 0, function* () {
    jest.spyOn(repository, 'findByEmailRep').mockResolvedValue(mock);
    const expectedResult = {
        message: 'A psychologist with this email already exists',
        statusCode: 400
    };
    const result = yield (0, createUser_service_1.default)(mock, repository);
    expect(result.statusCode).toBe(expectedResult.statusCode);
    expect(result.message).toBe(expectedResult.message);
}));
test('should return an error when the nickname is already being used', () => __awaiter(void 0, void 0, void 0, function* () {
    jest.spyOn(repository, 'findByEmailRep').mockResolvedValue(null);
    jest.spyOn(repository, 'findByNicknameRep').mockResolvedValue(mock);
    const expectedResult = {
        message: 'This nickname isn`t available. Try another one, please.',
        statusCode: 400
    };
    const result = yield (0, createUser_service_1.default)(mock, repository);
    expect(result.statusCode).toBe(expectedResult.statusCode);
    expect(result.message).toBe(expectedResult.message);
}));
test('should return an error when creating the user goes wrong at the database', () => __awaiter(void 0, void 0, void 0, function* () {
    jest.spyOn(repository, 'findByEmailRep').mockResolvedValue(undefined);
    jest.spyOn(repository, 'findByNicknameRep').mockResolvedValue(undefined);
    jest.spyOn(repository, 'createRep').mockRejectedValue(null);
    const result = yield (0, createUser_service_1.default)(mock, repository);
    expect(result.statusCode).toBe(400);
}));
