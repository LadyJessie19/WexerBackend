import Doctor from './DoctorEntity'
import { CreateDoctorDTO } from "./DoctorDTO";
import { ObjectId } from 'mongoose';

class DoctorRepository {
    constructor(private model: typeof Doctor){}

    async createRep(doctor:CreateDoctorDTO){
        return this.model.create(doctor);
    }

    async getAllRep(skip:number, limit:number){
        return this.model.find().populate("patients").skip(skip).limit(limit)
        //don't forget: .populate("photo")
        //how to populate images?
    }

    async updateRep(id:ObjectId, body:CreateDoctorDTO){
        return this.model.findByIdAndUpdate(id, { $set: body }, { new: true })
    }

    async deleteRep(id:ObjectId){
        return this.model.findByIdAndDelete(id)
    }
    
    async findByEmail(email:string){
        return await this.model.findOne({ email })
    }
    
    async pushPatient(doctorId: ObjectId, patientId: string){
        return this.model.findByIdAndUpdate(doctorId, {
            $push: {
            tasks: [patientId]
            }
        }, { new: true }).populate('patients')
    }
}

export default DoctorRepository