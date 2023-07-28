import TimelineRepository from "../TimelineRepository";
import PatientRepository from "../../Patient/PatientRepository";

import newSuccess from "../../../utils/SuccessHandler";
import newError from "../../../utils/ErrorHandler/index";
import { ObjectId } from "mongoose";

async function deleteTimeline(id:ObjectId, repository:TimelineRepository, patientRep:PatientRepository) {
    const timeline = await repository.getOneRep(id)

    if(timeline){
        await repository.deleteRep(id);
        await patientRep.pullTimeline(timeline.patientId?._id as unknown as ObjectId, id as unknown as ObjectId)
        return newSuccess('The timeline was successfully removed.', 200)
    }

    return newError('The timeline couldn`t be removed. Please, check the current mongoDB ID.', 400)
}

export default deleteTimeline