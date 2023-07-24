import OccurrenceRepository from "../OccurrenceRepository";

import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import PaginateData from "../../../utils/PaginateData";

async function getAllOccurrences(page: number, limit: number, repository:OccurrenceRepository) {
    try {
        const { message, statusCode, pageInfo, result } = await PaginateData(page, limit, 'occurrence', repository)
        const payload = { pageInfo, result }

        return newSuccess(message, statusCode, payload)
    } catch (error: any) {
        return serverError(error, "getAllOccurrences catch")
    }
}

export default getAllOccurrences
