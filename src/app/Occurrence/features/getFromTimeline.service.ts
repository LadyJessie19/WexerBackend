import OccurrenceRepository from "../OccurrenceRepository";

import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import PaginateData from "../../../utils/PaginateData";
import { ObjectId } from "mongoose";

async function getFromTimeline(timelineId:ObjectId, page: number, limit: number, repository:OccurrenceRepository) {
    try {
        const { message, statusCode, pageInfo, result } = await PaginateData(page, limit, 'occurrence', repository, timelineId)
        const payload = { pageInfo, result }

        return newSuccess(message, statusCode, payload)
    } catch (error: any) {
        return serverError(error, "getFromTimeline catch")
    }
}

export default getFromTimeline
