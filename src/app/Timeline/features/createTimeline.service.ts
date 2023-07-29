import TimelineRepository from "../TimelineRepository"
import PatientRepository from "../../Patient/PatientRepository"

import { TimelineWithPatientIdDTO } from "../TimelineDTO"

import newSuccess from "../../../utils/SuccessHandler"
import { ObjectId } from "mongoose"
import newError from "../../../utils/ErrorHandler"

async function createTimeline(timeline:TimelineWithPatientIdDTO, repository:TimelineRepository, patientRep:PatientRepository){

    const timelineCreated = await repository.createRep(timeline)

    if(!timelineCreated){
        return newError("Could not create timeline.", 400)
    }

    await patientRep.pushTimeline(timeline.patientId, timelineCreated._id as unknown as ObjectId)
    return newSuccess("The timeline was created with success!", 201, {timelineCreated})
}

export default createTimeline