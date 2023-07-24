import { ObjectId } from "mongoose";
import { CreateFileDTO } from "../File/FileDTO";

type OccurrencesKindType = 'session' | 'relevant-fact'

interface CreateOccurrenceDTO {
    title:string,
    content:string,
    kind:OccurrencesKindType
}

interface OccurrenceWithTimelineIdDTO extends CreateOccurrenceDTO{
    timelineId:ObjectId
}

interface ServiceOccurrenceDTO extends OccurrenceWithTimelineIdDTO{
    files: Array<CreateFileDTO>;
}

export { CreateOccurrenceDTO, OccurrenceWithTimelineIdDTO, ServiceOccurrenceDTO }