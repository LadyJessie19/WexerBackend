import PatientRepository from "./PatientRepository"
import UserRepository from "../User/UserRepository";

import { PatientWithUserIdDTO, ServicePatientDTO } from "./PatientDTO";

import createPatient from "./features/createPatient.service";
import getFromUser from "./features/getFromUser.service";
import getAllPatients from "./features/getAllPatients.service";
import getOnePatient from "./features/getOnePatient.service";
import updatePatient from "./features/updatePatient.service";
import deletePatient from "./features/deletePatient.service";
import { ObjectId } from "mongoose";

class PatientService{
    constructor(private repository:PatientRepository, private UserRepository:UserRepository){}

    async createSer(patient:PatientWithUserIdDTO){
      return createPatient(patient, this.repository, this.UserRepository)
    }

    async getFromUserSer(userId:ObjectId, page:number, limit:number){
      return getFromUser(userId, page, limit, this.repository)
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