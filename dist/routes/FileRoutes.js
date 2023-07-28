"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const FileModule_1 = __importDefault(require("../app/File/FileModule"));
const uploadSingle_1 = __importDefault(require("../middlewares/FileUploadMiddleware/uploadSingle"));
const AuthenticateMiddleware_1 = __importDefault(require("../middlewares/AuthenticateMiddleware"));
const path_1 = __importDefault(require("path"));
const FileRoutes = (0, express_1.Router)();
const fileController = FileModule_1.default.build().controller;
const authMiddleware = AuthenticateMiddleware_1.default.checkToken;
const uploadSingle = uploadSingle_1.default.build("file");
//Create and getAll from a occurrences;
const occurrencePath = "/occurrences/:occurrence_id/files";
//GetAll!
const commonPath = "/files";
//GetOne and delete. Yeah!
const pathWithId = "/files/:file_id";
FileRoutes.use(express_1.default.static(path_1.default.join(__dirname, "..", '../../uploads')));
FileRoutes.use(express_1.default.static('../../uploads'));
FileRoutes.use(authMiddleware);
//Create and read from a occurrence
FileRoutes.post(occurrencePath, uploadSingle, fileController.createCon.bind(fileController));
FileRoutes.get(occurrencePath, fileController.getFromParentCon.bind(fileController));
//Read
FileRoutes.get(commonPath, fileController.getAllCon.bind(fileController));
FileRoutes.get(pathWithId, fileController.getOneCon.bind(fileController));
//Delete
FileRoutes.delete(pathWithId, fileController.deleteCon.bind(fileController));
exports.default = FileRoutes;
