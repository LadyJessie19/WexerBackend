import UserRepository from "../UserRepository";

import newError from "../../../utils/ErrorHandler";
import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import { ObjectId } from "mongoose";

async function getOneUser(id:ObjectId, repository:UserRepository){
    try {
        const result = await repository.getOneRep(id);

        if (!result) {
        return newError(`The psychologist with the id ${id} wasn't found.`, 404, "!result")
        }

        return newSuccess("Psychologist was successfully found.", 200, result)

    } catch (error: any) {
        return serverError(error, "getOneUser catch")
    }
}

export default getOneUser