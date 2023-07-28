import { ObjectId } from "mongoose"
import { CreateFileDTO } from "./FileDTO"

class FileFactory {
    static newFile(body:CreateFileDTO, occurrenceId:ObjectId){
        return {
            filename: body.filename,
            mimetype: body.mimetype,
            occurrenceId
        }
    }
}

export default FileFactory