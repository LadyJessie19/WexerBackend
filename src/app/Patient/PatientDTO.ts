import { CreateTimelineDTO } from "../Timeline/TimelineDTO"

interface CreatePatientDTO {
    name:string,
    birthdate:Date,
    contact:string,
    demands:string,
    personalAnnotations:string
}

interface ServicePatientDTO extends CreatePatientDTO {
    timelines: Array<CreateTimelineDTO>
}

export { CreatePatientDTO, ServicePatientDTO }