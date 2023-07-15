import PatientRepository from "./PatientRepository"
import { CreatePatientDTO } from "./PatientDTO";

class PatientService{
    constructor(private repository:PatientRepository){}

    //add error verification

    async createSer(body:CreatePatientDTO){
        const result = await this.repository.createRep(body)
        return {message: "Patient created!", result}
    }
}

export default PatientService

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