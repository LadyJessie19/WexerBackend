"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserModule_1 = __importDefault(require("../app/User/UserModule"));
const AuthenticateMiddleware_1 = __importDefault(require("../middlewares/AuthenticateMiddleware"));
const UserRoutes = (0, express_1.Router)();
const userController = UserModule_1.default.build().controller;
const commonPath = '/users';
const pathWithId = '/users/:id';
//Create
UserRoutes.post(commonPath, userController.createCon.bind(userController));
//Read
UserRoutes.get(commonPath, AuthenticateMiddleware_1.default.checkToken, userController.getAllCon.bind(userController));
UserRoutes.get(pathWithId, AuthenticateMiddleware_1.default.checkToken, userController.getOneCon.bind(userController));
//Update
UserRoutes.patch(pathWithId, AuthenticateMiddleware_1.default.checkToken, userController.updateCon.bind(userController));
//Delete
UserRoutes.delete(pathWithId, AuthenticateMiddleware_1.default.checkToken, userController.deleteCon.bind(userController));
exports.default = UserRoutes;
