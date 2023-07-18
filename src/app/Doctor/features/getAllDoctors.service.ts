import DoctorRepository from "../DoctorRepository";
import newError from "../../../utils/ErrorHandler";
import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";

async function getAllDoctors(page: number, limit: number, repository:DoctorRepository) {
    try {
        const skip = (page - 1) * limit;
        const { totalDoctors, result } = await repository.getAllRep(skip, limit);
        const doctorCall = totalDoctors < 2 ? "doctor" : "doctors";

        const totalPages = Math.ceil(totalDoctors / limit);

        const payload = {
            totalPages: totalPages,
            limitPerPage: limit,
            currentPage: Number(page),
            doctors: result
        }

        if(page === 0){
            return newError(`This page doesn't exist.`, 404)
        }

        if(page > totalPages){
            return newError(`The current page is empty. Return to page ${totalPages}.`, 404)
        }

        if (totalDoctors < 1) {
        return newError("The doctors collection is empty.", 404)
        }
        
        return newSuccess(`There is ${totalDoctors} ${doctorCall} at the database`, 200, payload)

    } catch (error: any) {
        return serverError(error, "getAllDoctors catch")
    }
}

export default getAllDoctors
