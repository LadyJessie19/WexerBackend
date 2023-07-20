import TimelineRepository from "../TimelineRepository";

import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import PaginateData from "../../../utils/PaginateData";

async function getAllTimelines(page: number, limit: number, repository:TimelineRepository) {
    try {
        const { message, statusCode, pageInfo, result } = await PaginateData(page, limit, 'timeline', repository)
        const payload = { pageInfo, result }

        return newSuccess(message, statusCode, payload)
    } catch (error: any) {
        return serverError(error, "getAllTimelines catch")
    }
}

export default getAllTimelines
