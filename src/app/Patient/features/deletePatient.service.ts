import PatientRepository from "../PatientRepository";

import newSuccess from "../../../utils/SuccessHandler";
import newError from "../../../utils/ErrorHandler/index";
import { ObjectId } from "mongoose";

async function deletePatient(id:ObjectId, repository:PatientRepository) {
    const result = await repository.deleteRep(id);
    
    if(!result){
        return newError('The patient couldn`t be removed. Please, check the current mongoDB ID.', 400)
    }
    
    return newSuccess('The patient was successfully removed.', 200)
}

export default deletePatient