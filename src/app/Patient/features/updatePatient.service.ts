import PatientRepository from "../PatientRepository";

import { CreatePatientDTO, ServicePatientDTO } from "../PatientDTO";

import newSuccess from "../../../utils/SuccessHandler";
import serverError from "../../../utils/ServerError";
import { ObjectId } from "mongoose";

async function updatePatient(id:ObjectId, body:CreatePatientDTO, repository:PatientRepository){
    const update:any = await repository.updateRep(id, body)
    try {
        return newSuccess("The patient was successfully updated!", 200, update)
    } catch(error:any) {
        return serverError(error)
    }    
}

export default updatePatient