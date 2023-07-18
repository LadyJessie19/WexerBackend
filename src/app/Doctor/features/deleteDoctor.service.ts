import DoctorRepository from "../DoctorRepository";

import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import { ObjectId } from "mongoose";

async function deleteDoctor(id:ObjectId, repository:DoctorRepository) {
    repository.deleteRep(id);
    try {
        return newSuccess("The doctor was successfully removed", 200)
    } catch (error:any) {
        return serverError(error)
    }
}

export default deleteDoctor