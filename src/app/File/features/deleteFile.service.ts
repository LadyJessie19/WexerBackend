import FileRepository from "../FileRepository";
import OccurrenceRepository from "../../Occurrence/OccurrenceRepository";

import newSuccess from "../../../utils/SuccessHandler";
import newError from "../../../utils/ErrorHandler/index";
import { ObjectId } from "mongoose";

async function deleteFile(id:ObjectId, repository:FileRepository, occurrenceRep:OccurrenceRepository) {
    const file = await repository.getOneRep(id)

    if(file){
        await repository.deleteRep(id);
        await occurrenceRep.pullFile(file?.occurrenceId as unknown as ObjectId, id as unknown as ObjectId)
        return newSuccess('The file was successfully removed.', 200)
    }

    return newError('The file couldn`t be removed. Please, check the current mongoDB ID.', 400)
}

export default deleteFile 