import TimelineController from "./TimelineController";
import Timeline from "./TimelineEntity";
import TimelineRepository from "./TimelineRepository";
import TimelineService from "./TimelineService";

class TimelineModule {
    static build(){
        const repository = new TimelineRepository(Timeline)
        const service = new TimelineService(repository)
        const controller = new TimelineController(service)
        return { repository, service, controller }
    }
}

export default TimelineModule