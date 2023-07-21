import TimelineRepository from "../TimelineRepository";

import { CreateTimelineDTO } from "../TimelineDTO";

import newSuccess from "../../../utils/SuccessHandler";
import serverError from "../../../utils/ServerError";
import { ObjectId } from "mongoose";

async function updateTimeline(id:ObjectId, body:CreateTimelineDTO, repository:TimelineRepository){
    const update = await repository.updateRep(id, body)
    try {
        return newSuccess("The timeline was successfully updated!", 200, update as object)
    } catch(error:any) {
        return serverError(error)
    }    
}

export default updateTimeline