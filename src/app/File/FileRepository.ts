import File from './FileEntity'
import { CreateFileDTO } from "./FileDTO";

class FileRepository {
    constructor(private model: typeof File){}

    async createRep(file:CreateFileDTO){
        return this.model.create(file);
    }

    async getAllRep(){
        return this.model.find()
    }
}

export default FileRepository