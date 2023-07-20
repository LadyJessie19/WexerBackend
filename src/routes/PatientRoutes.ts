import { Router } from "express";
import PatientModule from "../app/Patient/PatientModule";
import AuthenticateMiddleware from "../middlewares/AuthenticateMiddleware";

const PatientRoutes = Router()
const patientController = PatientModule.build().controller

//Create and get all from a Psychologist;
const userPath = '/users/:user_id/patients';
//Get all patients
const commonPath = '/patients'
//Get one patient, update and delete;
const pathWithId = '/patients/:patient_id';

PatientRoutes.use(AuthenticateMiddleware.checkToken)

//Create
PatientRoutes.post(userPath, patientController.createCon.bind(patientController))
//Read
PatientRoutes.get(userPath, patientController.getFromParentCon.bind(patientController))
PatientRoutes.get(commonPath, patientController.getAllCon.bind(patientController))
PatientRoutes.get(pathWithId, patientController.getOneCon.bind(patientController))
//Update
PatientRoutes.patch(pathWithId, patientController.updateCon.bind(patientController))
//Delete
PatientRoutes.delete(pathWithId, patientController.deleteCon.bind(patientController))

export default PatientRoutes