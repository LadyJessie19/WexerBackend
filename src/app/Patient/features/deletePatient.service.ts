import PatientRepository from "../PatientRepository";

import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import { ObjectId } from "mongoose";

async function deletePatient(id:ObjectId, repository:PatientRepository) {
    repository.deleteRep(id);
    try {
        return newSuccess("The patient was successfully removed", 200)
    } catch (error:any) {
        return serverError(error)
    }
}

export default deletePatient