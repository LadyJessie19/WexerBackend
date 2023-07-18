import PatientRepository from "../PatientRepository";

import newError from "../../../utils/ErrorHandler";
import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import { ObjectId } from "mongoose";

async function getFromDoctor(doctorId:ObjectId, page: number, limit: number, repository:PatientRepository) {
    try {
        const skip = (page - 1) * limit;
        const result = await repository.getFromDoctorRep(doctorId, skip, limit);
        const totalPatients = result.length;
        const patientCall = totalPatients < 2 ? "patient" : "patients";

        const totalPages = Math.ceil(totalPatients / limit);

        const payload = {
            totalPages: totalPages,
            limitPerPage: limit,
            currentPage: Number(page),
            patients: result
        }

        if(page === 0){
            return newError(`This page doesn't exist.`, 404)
        }

        if(page > totalPages){
            return newError(`The current page is empty. Return to page ${totalPages == 0 ? 1: totalPages}.`, 404)
        }

        if (totalPatients < 1) {
        return newError("The patients collection is empty.", 404)
        }
        
        return newSuccess(`There is ${totalPatients} ${patientCall} from this psychologist.`, 200, payload)

    } catch (error: any) {
        return serverError(error, "getFromDoctor catch")
    }
}

export default getFromDoctor
