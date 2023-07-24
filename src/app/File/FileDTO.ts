import { ObjectId } from "mongoose";

interface CreateFileDTO {
    filename: string | undefined;
    mimetype: string | undefined;
}

interface FileWithOccurrenceIdDTO extends CreateFileDTO{
    occurrenceId:ObjectId
}

export { CreateFileDTO, FileWithOccurrenceIdDTO }