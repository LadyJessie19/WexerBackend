import { Router } from "express";
import DoctorModule from "../app/Doctor/DoctorModule";
import AuthenticateMiddleware from "../middlewares/AuthenticateMiddleware";

const DoctorRoutes = Router()
const doctorController = DoctorModule.build().controller

//Create
DoctorRoutes.post('/doctors', doctorController.createCon.bind(doctorController))
//Read
DoctorRoutes.get('/doctors', doctorController.getAllCon.bind(doctorController))
//Update
DoctorRoutes.patch('/doctors/:id', AuthenticateMiddleware.checkToken, doctorController.updateCon.bind(doctorController))
//Delete
DoctorRoutes.delete('/doctors/:id', AuthenticateMiddleware.checkToken, doctorController.deleteCon.bind(doctorController))

export default DoctorRoutes