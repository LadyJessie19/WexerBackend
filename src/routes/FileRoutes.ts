import { Router } from "express";
import FileModule from "../app/File/FileModule"
import AuthenticateMiddleware from "../middlewares/AuthenticateMiddleware";

const FileRoutes = Router()
const fileController = FileModule.build().controller

//Create and getAll from a user;
const occurrencePath = "/users/:user_id/files"
//Create and getAll from a occurrences;
const userPath = "/occurrences/:occurrence_id/files"
//Get Them ALL!
const commonPath = "/files"
//GetOne, update and delete
const pathWithId = "/files/:file_id"

// FileRoutes.use(AuthenticateMiddleware.checkToken)

//Create and read from a user
FileRoutes.post(userPath, fileController.createCon.bind(fileController))
FileRoutes.get(userPath, fileController.getFromParentCon.bind(fileController))
//Create and read from a occurrence
FileRoutes.post(occurrencePath, fileController.createCon.bind(fileController))
FileRoutes.get(occurrencePath, fileController.getFromParentCon.bind(fileController))
//Read
FileRoutes.get(commonPath, fileController.getAllCon.bind(fileController))
FileRoutes.get(pathWithId, fileController.getOneCon.bind(fileController))
//Delete
FileRoutes.delete(pathWithId, fileController.deleteCon.bind(fileController))

export default FileRoutes