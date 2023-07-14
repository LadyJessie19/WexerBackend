import DoctorRepository from "../DoctorRepository";

import newError from "../../../utils/ErrorHandler";
import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";

async function getAllDoctors(repository:DoctorRepository) {
    try {
        const doctors = await repository.getAllRep();
    
        if (doctors.length < 1) {
        return newError("The doctors collection is empty.", 404, "doctors.length")
        }
        
        return newSuccess(`${doctors.length} doctors were found at the database.`, 200, doctors)

    } catch (error: any) {
        return serverError(error, "getAllDoctors catch")
    }
}

export default getAllDoctors