import { Router } from "express";
import DoctorModule from "../app/Doctor/DoctorModule";

const DoctorRoutes = Router()
const doctorController = DoctorModule.build().controller

DoctorRoutes.post('/doctors', doctorController.something.bind(doctorController))

export default DoctorRoutes