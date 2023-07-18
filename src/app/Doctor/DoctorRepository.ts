import Doctor from './DoctorEntity'

import { CreateDoctorDTO } from "./DoctorDTO";

import { ObjectId } from 'mongoose';

class DoctorRepository {
    constructor(private model: typeof Doctor){}

    async createRep(doctor:CreateDoctorDTO){
        return await this.model.create(doctor);
    }

    async getAllRep(skip:number, limit:number){
        const totalDoctors = await this.model.countDocuments();
        const result = await this.model.find().skip(skip).limit(limit)//.populate("patients")
        return { totalDoctors, result }
        //don't forget: .populate("photo")
        //how to populate images?
    }

    async getOneRep(id:ObjectId){
        return await this.model.findById(id).populate('patients')
    }

    async updateRep(id:ObjectId, body:CreateDoctorDTO){
        return await this.model.findByIdAndUpdate(id, { $set: body }, { new: true })
    }

    async deleteRep(id:ObjectId){
        return await this.model.findByIdAndDelete(id)
    }
    
    async findByEmail(email:string){
        return await this.model.findOne({ email })
    }
    
    async pushPatient(doctorId: ObjectId, patientId: ObjectId){
        return await this.model.findByIdAndUpdate(doctorId, {
            $push: { patients: [patientId] }
        }, { new: true })
    }
}

export default DoctorRepository