import FileRepository from "../FileRepository";

import PaginateData from "../../../utils/PaginateData";
import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import { ObjectId } from "mongoose";

async function getFromOccurrence(occurrenceId:ObjectId, page: number, limit: number, repository:FileRepository) {
    try {
        const { message, statusCode, pageInfo, result } = await PaginateData(page, limit, 'file', repository, occurrenceId)
        const payload = { pageInfo, result }

        return newSuccess(message, statusCode, payload)
    } catch (error: any) {
        return serverError(error, "getFromOccurrence catch")
    }
}

export default getFromOccurrence
