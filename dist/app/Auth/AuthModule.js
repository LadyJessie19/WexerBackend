"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserModule_1 = __importDefault(require("../User/UserModule"));
const AuthController_1 = __importDefault(require("./AuthController"));
const AuthService_1 = __importDefault(require("./AuthService"));
class AuthModule {
    static build() {
        const service = new AuthService_1.default(UserModule_1.default.build().repository);
        const controller = new AuthController_1.default(service);
        return controller;
    }
}
exports.default = AuthModule;
