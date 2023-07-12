import { CreateOccurrenceDTO } from "../Occurrence/OccurrenceDTO"

interface CreateTimelineDTO {
    name:string
}

interface ServiceTimelineDTO extends CreateTimelineDTO {
    occurrences: Array<CreateOccurrenceDTO>
}

export { CreateTimelineDTO, ServiceTimelineDTO }