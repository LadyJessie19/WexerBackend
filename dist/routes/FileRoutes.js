"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FileModule_1 = __importDefault(require("../app/File/FileModule"));
const uploadSingle_1 = __importDefault(require("../middlewares/FileUploadMiddleware/uploadSingle"));
const FileRoutes = (0, express_1.Router)();
const fileController = FileModule_1.default.build().controller;
const uploadSingle = uploadSingle_1.default.build("file");
//Create and getAll from a occurrences;
const occurrencePath = "/occurrences/:occurrence_id/files";
//GetAll!
const commonPath = "/files";
//GetOne and delete. Yeah!
const pathWithId = "/files/:file_id";
//Create and read from a occurrence
FileRoutes.post(occurrencePath, uploadSingle, fileController.createCon.bind(fileController));
FileRoutes.get(occurrencePath, fileController.getFromParentCon.bind(fileController));
//Read
FileRoutes.get(commonPath, fileController.getAllCon.bind(fileController));
FileRoutes.get(pathWithId, fileController.getOneCon.bind(fileController));
//Delete
FileRoutes.delete(pathWithId, fileController.deleteCon.bind(fileController));
exports.default = FileRoutes;
