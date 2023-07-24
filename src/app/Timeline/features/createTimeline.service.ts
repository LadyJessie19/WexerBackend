import TimelineRepository from "../TimelineRepository"
import PatientRepository from "../../Patient/PatientRepository"

import { TimelineWithPatientIdDTO } from "../TimelineDTO"

import serverError from "../../../utils/ServerError"
import newSuccess from "../../../utils/SuccessHandler"
import { ObjectId } from "mongoose"

async function createTimeline(timeline:TimelineWithPatientIdDTO, repository:TimelineRepository, patientRep:PatientRepository){
    try{
        const timelineCreated = await repository.createRep(timeline)
        await patientRep.pushTimeline(timeline.patientId, timelineCreated._id as unknown as ObjectId)
        return newSuccess("The timeline was created with success!", 201, {timelineCreated})
    } catch(error:any){
        return serverError(error)
    }
}

export default createTimeline