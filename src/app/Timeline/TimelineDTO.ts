import { CreateOccurrenceDTO } from "../Occurrence/OccurrenceDTO"
import { ObjectId } from "mongoose"

interface CreateTimelineDTO {
    name:string
}

interface TimelineWithPatientIdDTO extends CreateTimelineDTO{
    patientId:ObjectId
}

interface ServiceTimelineDTO extends TimelineWithPatientIdDTO {
    occurrences: Array<CreateOccurrenceDTO>
}

export { CreateTimelineDTO, ServiceTimelineDTO, TimelineWithPatientIdDTO }