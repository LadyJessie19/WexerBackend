import { CreateTimelineDTO } from "./TimelineDTO"

class TimelineFactory {
    static newTimeline(body:CreateTimelineDTO){
        return {
            name: body.name,
        }
    }
}

export default TimelineFactory