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