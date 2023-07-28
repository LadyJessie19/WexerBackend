import { ObjectId } from "mongoose"
import { CreateTimelineDTO } from "./TimelineDTO"

class TimelineFactory {
    static newTimeline(body:CreateTimelineDTO, patientId:ObjectId){
        return {
            name: body.name,
            patientId
        }
    }
}

export default TimelineFactory