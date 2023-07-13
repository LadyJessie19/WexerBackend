import TimelineRepository from "./TimelineRepository"
import { CreateTimelineDTO } from "./TimelineDTO";

class TimelineService{
    constructor(private repository:TimelineRepository){}

    //add error verification

    async createSer(body:CreateTimelineDTO){
        const result = await this.repository.createRep(body)
        return {message: "Timeline created!", result}
    }
}

export default TimelineService