import { Router } from "express";
import FileModule from "../app/File/FileModule"
import UploadSingle from "../middlewares/FileUploadMiddleware/uploadSingle";
import AuthenticateMiddleware from "../middlewares/AuthenticateMiddleware";

const FileRoutes = Router()
const fileController = FileModule.build().controller
const authMiddleware = AuthenticateMiddleware.checkToken
const uploadSingle = UploadSingle.build("file")

//Create and getAll from a occurrences;
const occurrencePath = "/occurrences/:occurrence_id/files"
//GetAll!
const commonPath = "/files"
//GetOne and delete. Yeah!
const pathWithId = "/files/:file_id"

FileRoutes.use(authMiddleware)

//Create and read from a occurrence
FileRoutes.post(occurrencePath, uploadSingle, fileController.createCon.bind(fileController))
FileRoutes.get(occurrencePath, fileController.getFromParentCon.bind(fileController))
//Read
FileRoutes.get(commonPath, fileController.getAllCon.bind(fileController))
FileRoutes.get(pathWithId, fileController.getOneCon.bind(fileController))
//Delete
FileRoutes.delete(pathWithId, fileController.deleteCon.bind(fileController))

export default FileRoutes