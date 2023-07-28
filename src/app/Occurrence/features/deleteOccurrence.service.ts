import OccurrenceRepository from "../OccurrenceRepository";

import newSuccess from "../../../utils/SuccessHandler";
import newError from "../../../utils/ErrorHandler/index";
import { ObjectId } from "mongoose";

async function deleteOccurrence(id:ObjectId, repository:OccurrenceRepository) {
    const result = await repository.deleteRep(id);
    
    if(!result){
        return newError('The occurrence couldn`t be removed. Please, check the current mongoDB ID.', 400)
    }
    
    return newSuccess('The occurrence was successfully removed.', 200)
}

export default deleteOccurrence