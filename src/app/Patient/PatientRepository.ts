import Patient from './PatientEntity'

import { CreatePatientDTO, PatientWithDoctorIdDTO } from "./PatientDTO";

import { ObjectId } from 'mongoose';

class PatientRepository {
    constructor(private model: typeof Patient){}

    async createRep(patient:PatientWithDoctorIdDTO){
        return await this.model.create(patient);
    }

    async getFromDoctorRep(doctorId:ObjectId, skip:number, limit:number){
        return await this.model.find({doctorId}).skip(skip).limit(limit)//.populate("timelines")
    }

    async getAllRep(skip:number, limit:number){
        return await this.model.find().skip(skip).limit(limit)//.populate("timelines")
    }

    async getOneRep(id:ObjectId){
        return await this.model.findById(id).populate("doctorId").populate('timelines')
    }

    async updateRep(id:ObjectId, body:CreatePatientDTO){
        return await this.model.findByIdAndUpdate(id, { $set: body }, { new: true })
    }

    async deleteRep(id:ObjectId){
        return await this.model.findByIdAndDelete(id)
    }

    async pushTimeline(patientId: ObjectId, timelineId: ObjectId){
        return await this.model.findByIdAndUpdate(patientId, {
            $push: { timelines: [timelineId] }
        }, { new: true })
    }
}

export default PatientRepository