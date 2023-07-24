import UserRepository from "../UserRepository";

import newError from "../../../utils/ErrorHandler";
import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import { ObjectId } from "mongoose";

async function getOneUser(id:ObjectId, repository:UserRepository){
    try {
        const user = await repository.getOneRep(id);

        if (!user) {
        return newError(`The psychologist with the id ${id} wasn't found.`, 404, "!user")
        }

        return newSuccess("Psychologist successfully found.", 200, user)

    } catch (error: any) {
        return serverError(error, "getOneUser catch")
    }
}

export default getOneUser