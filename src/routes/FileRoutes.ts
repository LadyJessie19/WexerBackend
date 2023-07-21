import { Router } from "express";
import FileModule from "../app/File/FileModule"
import UploadSingle from "../middlewares/FileUploadMiddleware/uploadSingle";

const FileRoutes = Router()
const fileController = FileModule.build().controller
const uploadSingle = UploadSingle.build("file")

//Create and getAll from a user;
const occurrencePath = "/users/:user_id/files"
//Create and getAll from a occurrences;
const userPath = "/occurrences/:occurrence_id/files"
//Get Them ALL!
const commonPath = "/files"
//GetOne, update and delete
const pathWithId = "/files/:file_id"

//Create and read from a user
FileRoutes.post(userPath, uploadSingle, fileController.createFromUserCon.bind(fileController))
FileRoutes.get(userPath, fileController.getFromUserCon.bind(fileController))
//Create and read from a occurrence
FileRoutes.post(occurrencePath, uploadSingle, fileController.createFromOccurrenceCon.bind(fileController))
FileRoutes.get(occurrencePath, fileController.getFromOccurrenceCon.bind(fileController))
//Read
FileRoutes.get(commonPath, fileController.getAllCon.bind(fileController))
FileRoutes.get(pathWithId, fileController.getOneCon.bind(fileController))
//Delete
FileRoutes.delete(pathWithId, fileController.deleteCon.bind(fileController))

export default FileRoutes