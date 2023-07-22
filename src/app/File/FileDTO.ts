import { ObjectId } from "mongoose";

interface CreateFileDTO {
    filename: string | undefined;
    mimetype: string | undefined;
}

interface FileWithParentIdDTO extends CreateFileDTO{
    occurrenceId?:ObjectId,
    userId?:ObjectId
}

interface ServiceFileDTO extends FileWithParentIdDTO{
    
}

export { CreateFileDTO, FileWithParentIdDTO, ServiceFileDTO }