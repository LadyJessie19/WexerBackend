import OccurrenceRepository from "./OccurrenceRepository"
import { CreateOccurrenceDTO } from "./OccurrenceDTO";

class OccurrenceService{
    constructor(private repository:OccurrenceRepository){}

    //add error verification

    async createSer(body:CreateOccurrenceDTO){
        const result = await this.repository.createRep(body)
        return {message: "Occurrence created!", result}
    }
}

export default OccurrenceService