import FileRepository from "../FileRepository";

import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import { ObjectId } from "mongoose";

async function deleteFile(id:ObjectId, repository:FileRepository) {
    repository.deleteRep(id);
    try {
        return newSuccess("The file was successfully removed", 200)
    } catch (error:any) {
        return serverError(error)
    }
}

export default deleteFile