import FileRepository from "../FileRepository"
import UserRepository from "../../User/UserRepository"

import { FileWithParentIdDTO } from "../FileDTO"

import serverError from "../../../utils/ServerError"
import newSuccess from "../../../utils/SuccessHandler"
import { ObjectId } from "mongoose"

async function createFromUser(file:FileWithParentIdDTO, repository:FileRepository, userRep:UserRepository){
    try {
        const fileCreated = await repository.createRep(file)
        await userRep.pushFile(file.userId as unknown as ObjectId, fileCreated._id as unknown as ObjectId)
        return newSuccess("The file was created with success!", 201, {fileCreated})
    } catch(error:any){
        return serverError(error)
    }
}

export default createFromUser