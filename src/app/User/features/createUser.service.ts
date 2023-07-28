import UserRepository from "../UserRepository"

import { CreateUserDTO } from "../UserDTO"

import newError from "../../../utils/ErrorHandler"
import serverError from "../../../utils/ServerError"
import newSuccess from "../../../utils/SuccessHandler"
import DataEncrypt from "../../../utils/DataEncrypt"

async function createUser(payload:CreateUserDTO, repository:UserRepository) {
    
    const isAnOldUser = await repository.findByEmailRep(payload.email)
    if(isAnOldUser){
        return newError('A psychologist with this email already exists', 400, "isAnOldUser")
    }

    try {
        const passwordHashed = DataEncrypt.hash(payload.password, 8)
        const user = {...payload, password: passwordHashed}
        const result = await repository.createRep(user)
        return newSuccess("Psychologist created with success!", 201, result)

    } catch (error:any) {
        if (error.errors) {
        return newError(error.message, 400, "createUser catch")
    }
    return serverError(error)
}
}

export default createUser