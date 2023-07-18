import { ObjectId } from "mongoose"
import { CreateTimelineDTO } from "../Timeline/TimelineDTO"

interface CreatePatientDTO {
    name:string,
    birthdate:Date,
    contact:string,
    demands:string,
    personalAnnotations:string
}

interface PatientWithUserIdDTO extends CreatePatientDTO{
    userId:ObjectId
}

interface ServicePatientDTO extends PatientWithUserIdDTO {
    timelines: Array<CreateTimelineDTO>
}

export { CreatePatientDTO, ServicePatientDTO, PatientWithUserIdDTO }