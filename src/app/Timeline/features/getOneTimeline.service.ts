import TimelineRepository from "../TimelineRepository";

import newError from "../../../utils/ErrorHandler";
import newSuccess from "../../../utils/SuccessHandler";
import { ObjectId } from "mongoose";

async function getOneTimeline(id:ObjectId, repository:TimelineRepository){

    const result = await repository.getOneRep(id);

    if (!result) {
    return newError(`The timeline with the id ${id} wasn't found.`, 404, "!result")
    }

    return newSuccess("The timeline was successfully found.", 200, result)
}

export default getOneTimeline