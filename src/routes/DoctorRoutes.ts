import { Router } from "express";
import DoctorModule from "../app/Doctor/DoctorModule";
import AuthenticateMiddleware from "../middlewares/AuthenticateMiddleware";

const DoctorRoutes = Router()
const doctorController = DoctorModule.build().controller

const commonPath = '/doctors';
const pathWithId = '/doctors/:id';

//Create
DoctorRoutes.post(commonPath, doctorController.createCon.bind(doctorController))
//Read
DoctorRoutes.get(commonPath, AuthenticateMiddleware.checkToken, doctorController.getAllCon.bind(doctorController))
DoctorRoutes.get(pathWithId, AuthenticateMiddleware.checkToken, doctorController.getOneCon.bind(doctorController))
//Update
DoctorRoutes.patch(pathWithId, AuthenticateMiddleware.checkToken, doctorController.updateCon.bind(doctorController))
//Delete
DoctorRoutes.delete(pathWithId, AuthenticateMiddleware.checkToken, doctorController.deleteCon.bind(doctorController))

export default DoctorRoutes