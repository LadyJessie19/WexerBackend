import Doctor from './DoctorEntity'
import { CreateDoctorDTO } from "./DoctorDTO";

class DoctorRepository {
    constructor(private model: typeof Doctor){}

    async createRep(doctor:CreateDoctorDTO){
        return this.model.create(doctor);
    }

    async findByEmail(email:string){
        return this.model.findOne({ email })
        //don't forget: .populate("photo")
    }
    
    async getAllRep(){
        return this.model.find().populate("patients")
        //how to populate images?
    }
}

export default DoctorRepository