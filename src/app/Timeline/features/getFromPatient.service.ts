import TimelineRepository from "../TimelineRepository";

import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import PaginateData from "../../../utils/PaginateData";
import { ObjectId } from "mongoose";

async function getFromPatient(patientId:ObjectId, page: number, limit: number, repository:TimelineRepository) {
    try {
        const { message, statusCode, pageInfo, result } = await PaginateData(page, limit, 'timeline', repository, patientId)
        const payload = { pageInfo, result }

        return newSuccess(message, statusCode, payload)
    } catch (error: any) {
        return serverError(error, "getFromPatient catch")
    }
}

export default getFromPatient
