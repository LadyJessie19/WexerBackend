import { CreateOccurrenceDTO } from "./OccurrenceDTO"

class OccurrenceFactory {
    static newOccurrence(body:CreateOccurrenceDTO){
        return {
            title: body.title,
            content: body.content,
            kind: body.kind
        }
    }
}

export default OccurrenceFactory