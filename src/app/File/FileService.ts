import FileRepository from "./FileRepository"
import { CreateFileDTO } from "./FileDTO";

class FileService{
    constructor(private repository:FileRepository){}

    //add error verification

    async createSer(body:CreateFileDTO){
        const result = await this.repository.createRep(body)
        return {message: "File created!", result}
    }
}

export default FileService