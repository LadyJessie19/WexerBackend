"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PatientModule_1 = __importDefault(require("../app/Patient/PatientModule"));
const PatientRoutes = (0, express_1.Router)();
const patientController = PatientModule_1.default.build().controller;
//Create and get all from a Psychologist;
const userPath = '/users/:user_id/patients';
//Get all patients
const commonPath = '/patients';
//Get one patient, update and delete;
const pathWithId = '/patients/:patient_id';
//Create
PatientRoutes.post(userPath, patientController.createCon.bind(patientController));
//Read
PatientRoutes.get(userPath, patientController.getFromParentCon.bind(patientController));
PatientRoutes.get(commonPath, patientController.getAllCon.bind(patientController));
PatientRoutes.get(pathWithId, patientController.getOneCon.bind(patientController));
//Update
PatientRoutes.patch(pathWithId, patientController.updateCon.bind(patientController));
//Delete
PatientRoutes.delete(pathWithId, patientController.deleteCon.bind(patientController));
exports.default = PatientRoutes;
