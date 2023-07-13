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