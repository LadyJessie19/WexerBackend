import UserRepository from "../UserRepository";

import newSuccess from "../../../utils/SuccessHandler";
import newError from "../../../utils/ErrorHandler/index";
import { ObjectId } from "mongoose";

async function deleteUser(id:ObjectId, repository:UserRepository) {
    const result = await repository.deleteRep(id);
    
    if(!result){
        return newError('The psychologist couldn`t be removed. Please, check the current mongoDB ID.', 400)
    }
    
    return newSuccess('The psychologist was successfully removed.', 200)
}

export default deleteUser