import FileRepository from "../FileRepository"
import OccurrenceRepository from "../../Occurrence/OccurrenceRepository"

import { FileWithParentIdDTO } from "../FileDTO"

import serverError from "../../../utils/ServerError"
import newSuccess from "../../../utils/SuccessHandler"
import { ObjectId } from "mongoose"

async function createFromOccurrence(file:FileWithParentIdDTO, repository:FileRepository, occurrenceRep:OccurrenceRepository){
    try {
        const fileCreated = await repository.createRep(file)
        await occurrenceRep.pushFile(file.occurrenceId as unknown as ObjectId, fileCreated._id as unknown as ObjectId)
        return newSuccess("The file was created with success!", 201, {fileCreated})
    } catch(error:any){
        return serverError(error)
    }
}

export default createFromOccurrence