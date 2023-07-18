import UserRepository from "../UserRepository";
import newError from "../../../utils/ErrorHandler";
import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";

async function getAllUsers(page: number, limit: number, repository:UserRepository) {
    try {
        const skip = (page - 1) * limit;
        const { totalUsers, result } = await repository.getAllRep(skip, limit);
        const userCall = totalUsers < 2 ? "psychologist" : "psychologists";

        const totalPages = Math.ceil(totalUsers / limit);

        const payload = {
            totalPages: totalPages,
            limitPerPage: limit,
            currentPage: Number(page),
            users: result
        }

        if(page === 0){
            return newError(`This page doesn't exist.`, 404)
        }

        if(page > totalPages){
            return newError(`The current page is empty. Return to page ${totalPages}.`, 404)
        }

        if (totalUsers < 1) {
        return newError("The psychologist collection is empty.", 404)
        }
        
        return newSuccess(`There is ${totalUsers} ${userCall} at the database`, 200, payload)

    } catch (error: any) {
        return serverError(error, "getAllUsers catch")
    }
}

export default getAllUsers
