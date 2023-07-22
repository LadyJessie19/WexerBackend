import File from './FileEntity'
import { FileWithParentIdDTO } from "./FileDTO";
import { ObjectId } from 'mongoose';

class FileRepository {
    constructor(private model: typeof File){}

    async createRep(file:FileWithParentIdDTO){
        return this.model.create(file);
    }

    async getFromUserRep(userId:ObjectId, skip:number, limit:number){
        const result = await this.model.find({userId}).skip(skip).limit(limit)
        const totalItems = (await this.model.find({userId})).length
        return { totalItems, result }
    }

    async getFromOccurrenceRep(occurrenceId:ObjectId, skip:number, limit:number){
        const result = await this.model.find({occurrenceId}).skip(skip).limit(limit).populate("occurrenceId")
        const totalItems = (await this.model.find({occurrenceId})).length
        return { totalItems, result }
    }

    async getAllRep(skip:number, limit:number){
        const result = await this.model.find({}, null, { new: true }).skip(skip).limit(limit)//.populate("userId").populate('occurrenceId')
        const totalItems = await this.model.countDocuments();
        return { totalItems, result }
    }

    async getOneRep(id:ObjectId){
        return await this.model.findById(id).populate("userId").populate('occurrenceId')
    }

    async deleteRep(id:ObjectId){
        return await this.model.findByIdAndDelete(id)
    }
}

export default FileRepository