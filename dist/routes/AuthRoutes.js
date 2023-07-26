"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthModule_1 = __importDefault(require("../app/Auth/AuthModule"));
const AuthRoutes = (0, express_1.Router)();
const authController = AuthModule_1.default.build();
AuthRoutes.post('/auth', authController.authCon.bind(authController));
exports.default = AuthRoutes;
