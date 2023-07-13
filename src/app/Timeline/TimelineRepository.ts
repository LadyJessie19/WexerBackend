import Timeline from './TimelineEntity'
import { CreateTimelineDTO } from "./TimelineDTO";

class TimelineRepository {
    constructor(private model: typeof Timeline){}

    async createRep(timeline:CreateTimelineDTO){
        return this.model.create(timeline);
    }

    async getAllRep(){
        return this.model.find().populate("occurrences")
    }

}

export default TimelineRepository