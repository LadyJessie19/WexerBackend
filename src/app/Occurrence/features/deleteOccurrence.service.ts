import OccurrenceRepository from "../OccurrenceRepository";

import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import { ObjectId } from "mongoose";

async function deleteOccurrence(id:ObjectId, repository:OccurrenceRepository) {
    repository.deleteRep(id);
    try {
        return newSuccess("The occurrence was successfully removed", 200)
    } catch (error:any) {
        return serverError(error)
    }
}

export default deleteOccurrence