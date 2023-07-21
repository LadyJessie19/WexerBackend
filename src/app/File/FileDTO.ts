import { ObjectId } from "mongoose";

interface CreateFileDTO {
    filename: string;
    mimetype: string;
}

interface FileWithParentIdDTO extends CreateFileDTO{
    occurrenceId?:ObjectId,
    userId?:ObjectId
}

interface ServiceFileDTO extends FileWithParentIdDTO{
    
}

export { CreateFileDTO, FileWithParentIdDTO, ServiceFileDTO }