"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserEntity_1 = __importDefault(require("./UserEntity"));
const UserRepository_1 = __importDefault(require("./UserRepository"));
const UserService_1 = __importDefault(require("./UserService"));
const UserController_1 = __importDefault(require("./UserController"));
class UserModule {
    static build() {
        const repository = new UserRepository_1.default(UserEntity_1.default);
        const service = new UserService_1.default(repository);
        const controller = new UserController_1.default(service);
        return { repository, service, controller };
    }
}
exports.default = UserModule;
