import { ObjectId } from "mongoose"
import { CreateOccurrenceDTO } from "./OccurrenceDTO"

class OccurrenceFactory {
    static newOccurrence(body:CreateOccurrenceDTO, timelineId:ObjectId){
        return {
            title: body.title,
            content: body.content,
            kind: body.kind,
            timelineId
        }
    }
}

export default OccurrenceFactory