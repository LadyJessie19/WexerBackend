import FileRepository from "../FileRepository";

import newSuccess from "../../../utils/SuccessHandler";
import newError from "../../../utils/ErrorHandler/index";
import { ObjectId } from "mongoose";

async function deleteFile(id:ObjectId, repository:FileRepository) {
    const result = await repository.deleteRep(id);
    
    if(!result){
        return newError('The file couldn`t be removed. Please, check the current mongoDB ID.', 400)
    }
    
    return newSuccess('The file was successfully removed.', 200)
}

export default deleteFile