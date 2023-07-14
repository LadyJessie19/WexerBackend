import Doctor from './DoctorEntity'
import { CreateDoctorDTO } from "./DoctorDTO";

class DoctorRepository {
    constructor(private model: typeof Doctor){}

    async createRep(doctor:CreateDoctorDTO){
        return this.model.create(doctor);
    }

    async getAllRep(){
        return this.model.find().populate("patients")
        //don't forget: .populate("photo")
        //how to populate images?
    }

    async getOneRep(id:string){
        return this.model.findById(id)
    }
    
    async findByEmail(email:string){
        return await this.model.findOne({ email })
    }
    
}

export default DoctorRepository