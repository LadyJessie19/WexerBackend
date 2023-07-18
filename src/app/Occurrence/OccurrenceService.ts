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

/* 
async create(task: CreateTaskDTO) {
    try {
     const taskCreated = await this.repository.create(task);

      return this.boardRepository.pushTask(task.boardId as string, taskCreated.id)
    } catch(error) {
      console.log('error creating board', error)
      return { error: true, message: "Internal server error", status: 500 }
    }
  }
*/