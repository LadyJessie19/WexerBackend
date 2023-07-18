import DoctorRepository from "../DoctorRepository";

import newError from "../../../utils/ErrorHandler";
import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import { ObjectId } from "mongoose";

async function getOneDoctor(id:ObjectId, repository:DoctorRepository){
    try {
        const user = await repository.getOneRep(id);

        if (!user) {
        return newError(`The doctor with the id ${id} wasn't found`, 404, "!user")
        }

        return newSuccess("The doctor was successfully found.", 200, user)

    } catch (error: any) {
        return serverError(error, "getOneDoctor catch")
    }
}

export default getOneDoctor