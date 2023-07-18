import UserRepository from "../UserRepository";

import { CreateUserDTO } from "../UserDTO";

import newSuccess from "../../../utils/SuccessHandler";
import serverError from "../../../utils/ServerError";
import { ObjectId } from "mongoose";

async function updateUser(id:ObjectId, body:CreateUserDTO, repository:UserRepository){
    const update:any = await repository.updateRep(id, body)
    try {
        return newSuccess("Psychologist was successfully updated!", 200, update)
    } catch(error:any) {
        return serverError(error)
    }    
}

export default updateUser