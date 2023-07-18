import { ObjectId } from "mongoose"
import { CreateTimelineDTO } from "../Timeline/TimelineDTO"

interface CreatePatientDTO {
    name:string,
    birthdate:Date,
    contact:string,
    demands:string,
    personalAnnotations:string
}

interface PatientWithDoctorIdDTO extends CreatePatientDTO{
    doctorId:ObjectId
}

interface ServicePatientDTO extends PatientWithDoctorIdDTO {
    timelines: Array<CreateTimelineDTO>
}

export { CreatePatientDTO, ServicePatientDTO, PatientWithDoctorIdDTO }