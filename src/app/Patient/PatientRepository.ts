import Patient from './PatientEntity'
import { CreatePatientDTO } from "./PatientDTO";

class PatientRepository {
    constructor(private model: typeof Patient){}

    async createRep(patient:CreatePatientDTO){
        return this.model.create(patient);
    }

    async getAllRep(){
        return this.model.find().populate("timelines")
    }
}

export default PatientRepository