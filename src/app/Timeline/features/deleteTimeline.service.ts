import TimelineRepository from "../TimelineRepository";

import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import { ObjectId } from "mongoose";

async function deleteTimeline(id:ObjectId, repository:TimelineRepository) {
    repository.deleteRep(id);
    try {
        return newSuccess("The timeline was successfully removed", 200)
    } catch (error:any) {
        return serverError(error)
    }
}

export default deleteTimeline