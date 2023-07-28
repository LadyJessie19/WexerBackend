import PatientRepository from "../PatientRepository";

import newError from "../../../utils/ErrorHandler";
import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import { ObjectId } from "mongoose";

async function getOnePatient(id:ObjectId, repository:PatientRepository){
    try {
        const result = await repository.getOneRep(id);

        if (!result) {
        return newError(`The patient with the id ${id} wasn't found`, 404, "!result")
        }

        return newSuccess("The pacient was successfully found.", 200, result)

    } catch (error: any) {
        return serverError(error, "getOnePatient catch")
    }
}

export default getOnePatient