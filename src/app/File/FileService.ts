import FileRepository from "./FileRepository"
import UserRepository from "../User/UserRepository";
import OccurrenceRepository from "../Occurrence/OccurrenceRepository";

import { FileWithParentIdDTO } from "./FileDTO";

import createFromOccurrence from "./features/createFromOccurrence.service";
import createFromUser from "./features/createFromUser.service";
import getAllFiles from "./features/getAllFiles.service";
import getOneFile from "./features/getOneFile.service";
import deleteFile from "./features/deleteFile.service";
import getFromOccurrence from "./features/getFromOccurrence.service";
import getFromUser from "./features/getFromUser.service";

import { ObjectId } from "mongoose";

class FileService{
    constructor(private repository:FileRepository,
                private userRepository:UserRepository,
                private occurrenceRepository:OccurrenceRepository){}

    async createFromUserSer(file:FileWithParentIdDTO){
        return createFromUser(file, this.repository, this.userRepository)
    }

    async getFromUserSer(userId:ObjectId, page:number, limit:number){
        return getFromUser(userId, page, limit, this.repository)
    }

    async createFromOccurrenceSer(file:FileWithParentIdDTO){
        return createFromOccurrence(file, this.repository, this.occurrenceRepository)
    }

    async getFromOccurrenceSer(occurrenceId:ObjectId, page:number, limit:number){
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