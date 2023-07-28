import TimelineRepository from "../TimelineRepository";

import newSuccess from "../../../utils/SuccessHandler";
import newError from "../../../utils/ErrorHandler/index";
import { ObjectId } from "mongoose";

async function deleteTimeline(id:ObjectId, repository:TimelineRepository) {
    const result = await repository.deleteRep(id);
    
    if(!result){
        return newError('The timeline couldn`t be removed. Please, check the current mongoDB ID.', 400)
    }
    
    return newSuccess('The timeline was successfully removed.', 200)
}

export default deleteTimeline