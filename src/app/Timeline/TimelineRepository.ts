import Timeline from './TimelineEntity'
import { CreateTimelineDTO, TimelineWithPatientIdDTO } from "./TimelineDTO";

import { ObjectId } from 'mongoose';

class TimelineRepository {
    constructor(private model: typeof Timeline){}

    async createRep(timeline:CreateTimelineDTO){
        return this.model.create(timeline);
    }

    async getFromPatientRep(patientId:ObjectId, skip:number, limit:number){
        return await this.model.find({patientId}).skip(skip).limit(limit).populate("occurrences")
    }

    async getAllRep(skip:number, limit:number){
        return this.model.find().skip(skip).limit(limit)//.populate("occurrences")
    }

    async getOneRep(id:ObjectId){
        return await this.model.findById(id).populate("patientId").populate('occurrences')
    }

    async updateRep(id:ObjectId, body:CreateTimelineDTO){
        return await this.model.findByIdAndUpdate(id, { $set: body }, { new: true })
    }

    async deleteRep(id:ObjectId){
        return await this.model.findByIdAndDelete(id)
    }

    async pushOccurrence(timelineId:ObjectId, occurrenceId:ObjectId){
        return await this.model.findByIdAndUpdate(timelineId, {
            $push: { occurrences: [occurrenceId] }
        }, { new: true })
    }

}

export default TimelineRepository