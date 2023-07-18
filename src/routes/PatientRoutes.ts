import { Router } from "express";
import PatientModule from "../app/Patient/PatientModule";
import AuthenticateMiddleware from "../middlewares/AuthenticateMiddleware";

const PatientRoutes = Router()
const patientController = PatientModule.build().controller

//Create and get all from a Doctor;
const commonPath = '/doctors/:doctor_id/patients';
//Get one patient, update and delete;
const pathWithId = '/patients/:patient_id';

PatientRoutes.use(AuthenticateMiddleware.checkToken)

//Create
PatientRoutes.post(commonPath, patientController.createCon.bind(patientController))
//Read
PatientRoutes.get(commonPath, patientController.getAllCon.bind(patientController))
PatientRoutes.get(pathWithId, patientController.getOneCon.bind(patientController))
//Update
PatientRoutes.patch(pathWithId, patientController.updateCon.bind(patientController))
//Delete
PatientRoutes.delete(pathWithId, patientController.deleteCon.bind(patientController))

export default PatientRoutes