import FileRepository from "../FileRepository"
import OccurrenceRepository from "../../Occurrence/OccurrenceRepository"

import { FileWithOccurrenceIdDTO } from "../FileDTO"

import newSuccess from "../../../utils/SuccessHandler"
import { ObjectId } from "mongoose"
import newError from "../../../utils/ErrorHandler"

async function createFile(file:FileWithOccurrenceIdDTO, repository:FileRepository, occurrenceRep:OccurrenceRepository){

    const fileCreated = await repository.createRep(file)

    if(!fileCreated){
        return newError("Could not create file.", 400)
    }
    
    await occurrenceRep.pushFile(file.occurrenceId as unknown as ObjectId, fileCreated._id as unknown as ObjectId)
    return newSuccess("The file was created with success!", 201, {fileCreated})
}

export default createFile