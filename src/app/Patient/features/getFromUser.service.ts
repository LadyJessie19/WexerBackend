import PatientRepository from "../PatientRepository";

import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import PaginateData from "../../../utils/PaginateData";
import { ObjectId } from "mongoose";

async function getFromUser(userId:ObjectId, page: number, limit: number, repository:PatientRepository) {
    try {
        const { message, statusCode, pageInfo, result } = await PaginateData(page, limit, 'patient', repository, userId)
        const payload = { pageInfo, result }

        return newSuccess(message, statusCode, payload)
    } catch (error: any) {
        return serverError(error, "getFromUser catch")
    }
}

export default getFromUser
