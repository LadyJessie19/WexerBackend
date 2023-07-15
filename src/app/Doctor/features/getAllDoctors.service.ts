import DoctorRepository from "../DoctorRepository";

import newError from "../../../utils/ErrorHandler";
import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";

async function getAllDoctors(repository:DoctorRepository, page: number, limit: number) {
    try {
        const skip = (page - 1) * limit
        const doctors = await repository.getAllRep(skip, limit);
        const totalDoctors = doctors.length;
        const doctorCall = totalDoctors < 2 ? "doctor" : "doctors"
        const totalPages = Math.ceil(totalDoctors / limit)
        
        const payload = {
            totalPages: totalPages,
            limitPerPage: limit,
            currentPage: Number(page),
            doctors
        }

        if (totalDoctors < 1) {
        return newError("The doctors collection is empty.", 404, "doctors.length")
        }
        
        return newSuccess(`${totalDoctors} ${doctorCall} at page ${page}`, 200, payload)

    } catch (error: any) {
        return serverError(error, "getAllDoctors catch")
    }
}

export default getAllDoctors
