import FileRepository from "../FileRepository";

import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import newError from "../../../utils/ErrorHandler";
import { ObjectId } from "mongoose";

async function getFromOccurrence(occurrenceId:ObjectId, page: number, limit: number, repository:FileRepository) {
    try {
        const skip = (page - 1) * limit;
        const { totalItems, result } = await repository.getFromOccurrenceRep(occurrenceId, skip, limit)
        const entityCall = totalItems < 2 ? `file` : `files`;
        const totalPages = Math.ceil(totalItems / limit);
        let message:string;
        let statusCode:number;

        const pageInfo = { totalPages, limitPerPage: limit, currentPage: Number(page) }

        if (totalItems < 1) {
            message = `There is no files at this collection.`
            statusCode = 404
            return newError(message, statusCode)
        } else if (page > totalPages){
            message = `The current page is empty. Return to page ${totalPages}.`
            statusCode = 404
            return newError(message, statusCode)
        } else {
            message = `There is ${totalItems} ${entityCall} from the id ${occurrenceId}.`
            statusCode = 200
            return newSuccess(message, statusCode, { pageInfo, result })
        }
    } catch (error: any) {
        return serverError(error, "getFromOccurrence catch")
    }
}

export default getFromOccurrence
