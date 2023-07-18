import UserRepository from "../UserRepository";

import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import { ObjectId } from "mongoose";

async function deleteUser(id:ObjectId, repository:UserRepository) {
    repository.deleteRep(id);
    try {
        return newSuccess("Psychologist successfully removed", 200)
    } catch (error:any) {
        return serverError(error)
    }
}

export default deleteUser