import PatientRepository from "../PatientRepository";

import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import PaginateData from "../../../utils/PaginateData";

async function getAllPatients(page: number, limit: number, repository:PatientRepository) {
    try {
        const { message, statusCode, pageInfo, result } = await PaginateData(page, limit, 'patient', repository)
        const payload = { pageInfo, result }

        return newSuccess(message, statusCode, payload)
    } catch (error: any) {
        return serverError(error, "getAllPatients catch")
    }
}

export default getAllPatients
