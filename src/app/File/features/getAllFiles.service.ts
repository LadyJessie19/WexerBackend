import FileRepository from "../FileRepository";

import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import PaginateData from "../../../utils/PaginateData";

async function getAllFiles(page: number, limit: number, repository:FileRepository) {
    try {
        const { message, statusCode, pageInfo, result } = await PaginateData(page, limit, 'file', repository)
        const payload = { pageInfo, result }

        return newSuccess(message, statusCode, payload)
    } catch (error: any) {
        return serverError(error, "getAllFiles catch")
    }
}

export default getAllFiles
