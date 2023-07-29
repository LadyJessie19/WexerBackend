import PatientRepository from "../PatientRepository"
import UserRepository from "../../User/UserRepository"

import { PatientWithUserIdDTO } from "../PatientDTO"

import newSuccess from "../../../utils/SuccessHandler"
import { ObjectId } from "mongoose"
import newError from "../../../utils/ErrorHandler"

async function createPatient(patient:PatientWithUserIdDTO, repository:PatientRepository, userRep:UserRepository){

    const patientCreated = await repository.createRep(patient)
    
    if(!patientCreated){
        return newError("Could not create patient.", 400)
    }

    await userRep.pushPatient(patient.userId, patientCreated._id as unknown as ObjectId)
    return newSuccess("The patient was created with success!", 201, {patientCreated})
}

export default createPatient