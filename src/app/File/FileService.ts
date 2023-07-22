import FileRepository from "./FileRepository"
import OccurrenceRepository from "../Occurrence/OccurrenceRepository";

import { FileWithOccurrenceIdDTO } from "./FileDTO";

import createFile from "./features/createFile.service";
import getFromOccurrence from "./features/getFromOccurrence.service";
import getAllFiles from "./features/getAllFiles.service";
import getOneFile from "./features/getOneFile.service";
import deleteFile from "./features/deleteFile.service";

import { ObjectId } from "mongoose";

class FileService{
    constructor(private repository:FileRepository,
        private occurrenceRepository:OccurrenceRepository){}

    async createSer(file:FileWithOccurrenceIdDTO){
        return createFile(file, this.repository, this.occurrenceRepository)
    }

    async getFromParentSer(occurrenceId:ObjectId, page:number, limit:number){
        return getFromOccurrence(occurrenceId, page, limit, this.repository)
    }

    async getAllSer(page:number, limit:number){
        return getAllFiles(page, limit, this.repository)
    }
    
    async getOneSer(id:ObjectId){
        return await getOneFile(id, this.repository)
    }

    async deleteSer(id:ObjectId){
        return await deleteFile(id, this.repository)
    }
}

export default FileService