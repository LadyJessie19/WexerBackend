import Occurrence from './OccurrenceEntity'
import { CreateOccurrenceDTO } from "./OccurrenceDTO";

class OccurrenceRepository {
    constructor(private model: typeof Occurrence){}

    async createRep(occurrence:CreateOccurrenceDTO){
        return this.model.create(occurrence);
    }

    async getAllRep(){
        return this.model.find().populate("files")
    }
}

export default OccurrenceRepository