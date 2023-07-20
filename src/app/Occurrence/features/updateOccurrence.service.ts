import OccurrenceRepository from "../OccurrenceRepository";

import { CreateOccurrenceDTO } from "../OccurrenceDTO";

import newSuccess from "../../../utils/SuccessHandler";
import serverError from "../../../utils/ServerError";
import { ObjectId } from "mongoose";

async function updateOccurrence(id:ObjectId, body:CreateOccurrenceDTO, repository:OccurrenceRepository){
    const update:any = await repository.updateRep(id, body)
    try {
        return newSuccess("The occurrence was successfully updated!", 200, update)
    } catch(error:any) {
        return serverError(error)
    }    
}

export default updateOccurrence