import Patient from './PatientEntity'

import { CreatePatientDTO, PatientWithUserIdDTO } from "./PatientDTO";

import { ObjectId } from 'mongoose';

class PatientRepository {
    constructor(private model: typeof Patient){}

    async createRep(patient:PatientWithUserIdDTO){
        return await this.model.create(patient);
    }

    async getFromUserRep(userId:ObjectId, skip:number, limit:number){
        return await this.model.find({userId}).skip(skip).limit(limit).populate("timelines")
    }

    async getAllRep(skip:number, limit:number){
        return await this.model.find().skip(skip).limit(limit)//.populate("timelines")
    }

    async getOneRep(id:ObjectId){
        return await this.model.findById(id).populate("userId").populate('timelines')
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