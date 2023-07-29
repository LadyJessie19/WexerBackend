import UserRepository from "../UserRepository"

import { CreateUserDTO } from "../UserDTO"

import newError from "../../../utils/ErrorHandler"
import newSuccess from "../../../utils/SuccessHandler"
import DataEncrypt from "../../../utils/DataEncrypt"

async function createUser(payload:CreateUserDTO, repository:UserRepository) {
    
    const isAnOldUser = await repository.findByEmailRep(payload.email)
    if(isAnOldUser){
        return newError('A psychologist with this email already exists', 400, "isAnOldUser")
    }

    const nicknameExists = await repository.findByNicknameRep(payload.nickname)
    if(nicknameExists){
        return newError('This nickname isn`t available. Try another one, please.', 400, 'nicknameExists')
    }

    try {
        const passwordHashed = DataEncrypt.hash(payload.password, 8)
        const user = {...payload, password: passwordHashed}
        const result = await repository.createRep(user)
        return newSuccess("The psychologist was created with success!", 201, result)

    } catch (error:any) {
        return newError('Something went wrong at the database. ', 400, "createUser catch")
    }
}

export default createUser