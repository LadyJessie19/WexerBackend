import PatientRepository from "../PatientRepository";

import newError from "../../../utils/ErrorHandler";
import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import { ObjectId } from "mongoose";

async function getAllPatients(doctorId:ObjectId, page: number, limit: number, repository:PatientRepository) {
    try {
        const skip = (page - 1) * limit;
        const result = await repository.getAllRep(doctorId, skip, limit);
        const totalPatients = 1;
        const patientCall = totalPatients < 2 ? "patient" : "patients";

        const totalPages = Math.ceil(totalPatients / limit);

        const payload = {
            totalPages: totalPages,
            limitPerPage: limit,
            currentPage: Number(page),
            patients: result
        }

        if(page > totalPages){
            return newSuccess(`The current page is empty. Return to page ${totalPages}.`, 404)
        }

        if (totalPatients < 1) {
        return newError("The patients collection is empty.", 404)
        }
        
        return newSuccess(`There is ${totalPatients} ${patientCall} at the database`, 200, payload)

    } catch (error: any) {
        return serverError(error, "getAllPatients catch")
    }
}

export default getAllPatients
