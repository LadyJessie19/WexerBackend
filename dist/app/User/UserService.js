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
const createUser_service_1 = __importDefault(require("./features/createUser.service"));
const getAllUsers_service_1 = __importDefault(require("./features/getAllUsers.service"));
const getOneUsers_service_1 = __importDefault(require("./features/getOneUsers.service"));
const updateUser_service_1 = __importDefault(require("./features/updateUser.service"));
const deleteUser_service_1 = __importDefault(require("./features/deleteUser.service"));
class UserService {
    constructor(repository) {
        this.repository = repository;
    } //After, add photoRepository
    createSer(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, createUser_service_1.default)(body, this.repository);
        });
    }
    getAllSer(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getAllUsers_service_1.default)(page, limit, this.repository);
        });
    }
    getOneSer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getOneUsers_service_1.default)(id, this.repository);
        });
    }
    updateSer(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, updateUser_service_1.default)(id, body, this.repository);
        });
    }
    deleteSer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, deleteUser_service_1.default)(id, this.repository);
        });
    }
}
exports.default = UserService;
