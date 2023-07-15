import { ObjectId } from "mongoose";
import { CreateDoctorDTO } from "../DoctorDTO";
import DoctorRepository from "../DoctorRepository";
import newSuccess from "../../../utils/SuccessHandler";
import serverError from "../../../utils/ServerError";

async function updateDoctor(id:ObjectId, body:CreateDoctorDTO, repository:DoctorRepository){
    const update:any = await repository.updateRep(id, body)
    try {
        return newSuccess("The doctor was successfully updated!", 200, update)
    } catch(error:any) {
        return serverError(error)
    }    
}

export default updateDoctor