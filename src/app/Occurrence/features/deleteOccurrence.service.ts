import OccurrenceRepository from "../OccurrenceRepository";
import TimelineRepository from "../../Timeline/TimelineRepository";

import newSuccess from "../../../utils/SuccessHandler";
import newError from "../../../utils/ErrorHandler/index";
import { ObjectId } from "mongoose";

async function deleteOccurrence(id:ObjectId, repository:OccurrenceRepository, timelineRep:TimelineRepository) {
    const occurrence = await repository.getOneRep(id)

    if(occurrence){
        await repository.deleteRep(id);
        await timelineRep.pullOccurrence(occurrence.timelineId?._id as unknown as ObjectId, id as unknown as ObjectId)
        return newSuccess('The occurrence was successfully removed.', 200)
    }

    return newError('The occurrence couldn`t be removed. Please, check the current mongoDB ID.', 400)
}

export default deleteOccurrence