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
const UserModule_1 = __importDefault(require("../UserModule"));
const createUser_service_1 = __importDefault(require("./createUser.service"));
const repository = UserModule_1.default.build().repository;
test('should create a new user', () => __awaiter(void 0, void 0, void 0, function* () {
    const mock = { email: 'email@email.com', password: '123456', name: 'Someone Someonderson', nickname: 'Mustard' };
    const expectedResult = {
        message: "Psychologist created with success!",
        statusCode: 201,
        data: mock
    };
    jest.spyOn(repository, 'findByEmailRep').mockResolvedValue(undefined);
    jest.spyOn(repository, 'createRep').mockResolvedValue(expectedResult);
    const result = yield (0, createUser_service_1.default)(mock, repository);
    expect(result.statusCode).toBe(201);
}));
/* test('should return a error when creating the user', async () => {
  const mock = { email: 'email@email.com', password: '123456', name: 'Someone Someonderson'}
  
  jest.spyOn(repository, 'findByEmailRep').mockResolvedValue(mock as any)
  // jest.spyOn(repository, 'createRep').mockResolvedValue(expectedResult as any)

}) */ 
