import OccurrenceRepository from "../OccurrenceRepository"
import TimelineRepository from "../../Timeline/TimelineRepository"

import { OccurrenceWithTimelineIdDTO } from "../OccurrenceDTO"

import newSuccess from "../../../utils/SuccessHandler"
import { ObjectId } from "mongoose"
import newError from "../../../utils/ErrorHandler"

async function createOccurrence(occurrence:OccurrenceWithTimelineIdDTO, repository:OccurrenceRepository, timelineRep:TimelineRepository){

        const occurrenceCreated = await repository.createRep(occurrence)

        if(!occurrenceCreated){
            newError("Could not create occurrence.", 400)
        }

        await timelineRep.pushOccurrence(occurrence.timelineId, occurrenceCreated._id as unknown as ObjectId)
        return newSuccess("The occurrence was created with success!", 201, {occurrenceCreated})
}

export default createOccurrence