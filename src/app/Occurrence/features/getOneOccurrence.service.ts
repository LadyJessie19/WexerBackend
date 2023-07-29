import OccurrenceRepository from "../OccurrenceRepository";

import newError from "../../../utils/ErrorHandler";
import newSuccess from "../../../utils/SuccessHandler";
import { ObjectId } from "mongoose";

async function getOneOccurrence(id:ObjectId, repository:OccurrenceRepository){
    const result = await repository.getOneRep(id);

    if (!result) {
    return newError(`The occurrence with the id ${id} wasn't found.`, 404, "!result")
    }

    return newSuccess("The occurrence was successfully found.", 200, result)

}

export default getOneOccurrence