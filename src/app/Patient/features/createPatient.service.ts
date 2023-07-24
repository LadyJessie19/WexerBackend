import PatientRepository from "../PatientRepository"
import UserRepository from "../../User/UserRepository"

import { PatientWithUserIdDTO } from "../PatientDTO"

import serverError from "../../../utils/ServerError"
import newSuccess from "../../../utils/SuccessHandler"
import { ObjectId } from "mongoose"

async function createPatient(patient:PatientWithUserIdDTO, repository:PatientRepository, userRep:UserRepository){
    try{
        const patientCreated = await repository.createRep(patient)
        await userRep.pushPatient(patient.userId, patientCreated._id as unknown as ObjectId)
        return newSuccess("The patient created with success!", 201, {patientCreated})
    } catch(error:any){
        return serverError(error)
    }
}

export default createPatient