import { CreateFileDTO } from "../File/FileDTO";

interface CreateOccurrenceDTO {
    title:string,
    content:string,
    kind:string
}

interface ServiceOccurrenceDTO extends CreateOccurrenceDTO{
    files: Array<CreateFileDTO>;
}

export { CreateOccurrenceDTO, ServiceOccurrenceDTO }