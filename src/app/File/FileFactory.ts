import { CreateFileDTO } from "./FileDTO"

class FileFactory {
    static newFile(body:CreateFileDTO){
        return {
            filename: body.filename,
            mimetype: body.mimetype
        }
    }
}

export default FileFactory