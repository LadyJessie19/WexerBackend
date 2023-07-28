import Timeline from './TimelineEntity'
import { CreateTimelineDTO } from "./TimelineDTO";

import { ObjectId } from 'mongoose';

class TimelineRepository {
    constructor(private model: typeof Timeline){}

    async createRep(timeline:CreateTimelineDTO){
        return this.model.create(timeline);
    }

    async getFromParentRep(patientId:ObjectId, skip:number, limit:number){
        const result = await this.model.find({patientId}).skip(skip).limit(limit).populate("occurrences")
        const totalItems = (await this.model.find({patientId})).length
        return { totalItems, result }
    }

    async getAllRep(skip:number, limit:number){
        const result = await this.model.find({}, null, { new: true }).skip(skip).limit(limit)//.populate("occurrences")
        const totalItems = await this.model.countDocuments();
        return { totalItems, result }
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
    
    async pullOccurrence(timelineId:ObjectId, occurrenceId:ObjectId){
        return await this.model.findByIdAndUpdate(timelineId, {
            $pull: { occurrences: occurrenceId }
        }, { new: true })
    }
}

export default TimelineRepository