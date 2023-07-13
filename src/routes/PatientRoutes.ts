import { Router } from "express";
import PatientModule from "../app/Patient/PatientModule";

const PatientRoutes = Router()
const patientController = PatientModule.build().controller

PatientRoutes.post('/patients', patientController.something.bind(patientController))

export default PatientRoutes