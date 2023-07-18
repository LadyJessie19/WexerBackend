import PatientRepository from "./PatientRepository"
import DoctorRepository from "../Doctor/DoctorRepository";

import { PatientWithDoctorIdDTO, ServicePatientDTO } from "./PatientDTO";

import createPatient from "./features/createPatient.service";
import getFromDoctor from "./features/getFromDoctor.service";
import getAllPatients from "./features/getAllPatients.service";
import getOnePatient from "./features/getOnePatient.service";
import updatePatient from "./features/updatePatient.service";
import deletePatient from "./features/deletePatient.service";
import { ObjectId } from "mongoose";

class PatientService{
    constructor(private repository:PatientRepository, private DoctorRepository:DoctorRepository){}

    async createSer(patient:PatientWithDoctorIdDTO){
      return createPatient(patient, this.repository, this.DoctorRepository)
    }

    async getFromDoctorSer(doctorId:ObjectId, page:number, limit:number){
      return getFromDoctor(doctorId, page, limit, this.repository)
    }

    async getAllSer(page:number, limit:number){
      return getAllPatients(page, limit, this.repository)
    }

    async getOneSer(id:ObjectId){
      return await getOnePatient(id, this.repository)
    }

    async updateSer(id:ObjectId, body:ServicePatientDTO){
      return await updatePatient(id, body, this.repository)
    }

    async deleteSer(id:ObjectId){
      return await deletePatient(id, this.repository)
    }
}

export default PatientService