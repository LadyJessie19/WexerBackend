import OccurrenceRepository from "../OccurrenceRepository"
import TimelineRepository from "../../Timeline/TimelineRepository"

import { OccurrenceWithTimelineIdDTO } from "../OccurrenceDTO"

import serverError from "../../../utils/ServerError"
import newSuccess from "../../../utils/SuccessHandler"
import { ObjectId } from "mongoose"

async function createOccurrence(occurrence:OccurrenceWithTimelineIdDTO, repository:OccurrenceRepository, timelineRep:TimelineRepository){
    try{
        const occurrenceCreated = await repository.createRep(occurrence)
        await timelineRep.pushOccurrence(occurrence.timelineId, occurrenceCreated._id as unknown as ObjectId)
        return newSuccess("The occurrence was created with success!", 201, {occurrenceCreated})
    } catch(error:any){
        return serverError(error)
    }
}

export default createOccurrence