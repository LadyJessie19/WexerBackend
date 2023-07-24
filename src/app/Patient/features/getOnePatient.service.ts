import PatientRepository from "../PatientRepository";

import newError from "../../../utils/ErrorHandler";
import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import { ObjectId } from "mongoose";

async function getOnePatient(id:ObjectId, repository:PatientRepository){
    try {
        const user = await repository.getOneRep(id);

        if (!user) {
        return newError(`The patient with the id ${id} wasn't found`, 404, "!user")
        }

        return newSuccess("The pacient was successfully found.", 200, user)

    } catch (error: any) {
        return serverError(error, "getOnePatient catch")
    }
}

export default getOnePatient