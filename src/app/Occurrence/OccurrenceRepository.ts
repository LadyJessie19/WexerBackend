import Occurrence from './OccurrenceEntity'
import { CreateOccurrenceDTO, OccurrenceWithTimelineIdDTO } from "./OccurrenceDTO";
import { ObjectId } from 'mongoose';

class OccurrenceRepository {
    constructor(private model: typeof Occurrence){}

    async createRep(occurrence:OccurrenceWithTimelineIdDTO){
        return this.model.create(occurrence);
    }

    async getFromParentRep(timelineId:ObjectId, skip:number, limit:number){
        const result = await this.model.find({timelineId}).skip(skip).limit(limit).populate("files").populate("timelineId")
        const totalItems = (await this.model.find({timelineId})).length
        return { totalItems, result }
    }

    async getAllRep(skip:number, limit:number){
        const result = await this.model.find({}, null, { new: true }).skip(skip).limit(limit)//.populate("files")
        const totalItems = await this.model.countDocuments();
        return { totalItems, result }
    }

    async getOneRep(id:ObjectId){
        return await this.model.findById(id).populate("timelineId").populate('files')
    }

    async updateRep(id:ObjectId, body:CreateOccurrenceDTO){
        return await this.model.findByIdAndUpdate(id, { $set: body }, { new: true })
    }

    async deleteRep(id:ObjectId){
        return await this.model.findByIdAndDelete(id)
    }

    async pushFile(occurrenceId:ObjectId, fileId:ObjectId){
        return await this.model.findByIdAndUpdate(occurrenceId, {
            $push: { files: [fileId] }
        }, { new: true })
    }
}

export default OccurrenceRepository