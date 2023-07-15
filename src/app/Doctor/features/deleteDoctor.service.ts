import { ObjectId } from "mongoose";
import serverError from "../../../utils/ServerError";
import DoctorRepository from "../DoctorRepository";
import newSuccess from "../../../utils/SuccessHandler";

async function deleteDoctor(id:ObjectId, repository:DoctorRepository) {
    repository.deleteRep(id);
    try {
        return newSuccess("The doctor was successfully removed", 200)
    } catch (error:any) {
        return serverError(error as Error)
    }
}

export default deleteDoctor