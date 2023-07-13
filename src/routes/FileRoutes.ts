import { Router } from "express";
import FileModule from "../app/File/FileModule"

const FileRoutes = Router()
const fileController = FileModule.build().controller

FileRoutes.post('/files', fileController.something.bind(fileController))

export default FileRoutes