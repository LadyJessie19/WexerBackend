import OccurrenceController from "./OccurrenceController";
import Occurrence from "./OccurrenceEntity";
import OccurrenceRepository from "./OccurrenceRepository";
import OccurrenceService from "./OccurrenceService";

class OccurrenceModule {
    static build(){
        const repository = new OccurrenceRepository(Occurrence)
        const service = new OccurrenceService(repository)
        const controller = new OccurrenceController(service)
        return { repository, service, controller }
    }
}

export default OccurrenceModule