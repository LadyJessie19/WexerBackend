import UserRepository from "../UserRepository";

import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import PaginateData from "../../../utils/PaginateData";

async function getAllUsers(page: number, limit: number, repository:UserRepository) {
    try {
        const { message, statusCode, pageInfo, result } = await PaginateData(page, limit, 'psychologist', repository)
        const payload = { pageInfo, result }

        return newSuccess(message, statusCode, payload)
    } catch (error: any) {
        return serverError(error, "getAllUsers catch")
    }
}

export default getAllUsers
