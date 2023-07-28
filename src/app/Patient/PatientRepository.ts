import Patient from './PatientEntity'

import { CreatePatientDTO, PatientWithUserIdDTO } from "./PatientDTO";

import { ObjectId } from 'mongoose';

class PatientRepository {
    constructor(private model: typeof Patient){}

    async createRep(patient:PatientWithUserIdDTO){
        return await this.model.create(patient);
    }

    async getFromParentRep(userId:ObjectId, skip:number, limit:number){
        const result = await this.model.find({userId}).skip(skip).limit(limit).populate("timelines")
        const totalLength = await this.model.find({userId})
        const totalItems = totalLength.length
        return { totalItems, result }
    }

    async getAllRep(skip:number, limit:number){
        const totalItems = await this.model.countDocuments();
        const result = await this.model.find({}, null, { new: true }).skip(skip).limit(limit)//.populate("timelines")
        return { totalItems, result }
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
    
    async pullTimeline(patientId: ObjectId, timelineId: ObjectId){
        return await this.model.findByIdAndUpdate(patientId, {
            $pull: { timelines: timelineId }
        }, { new: true })
    }
}

export default PatientRepository