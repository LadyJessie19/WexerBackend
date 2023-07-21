import FileRepository from "../FileRepository";

import newError from "../../../utils/ErrorHandler";
import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import { ObjectId } from "mongoose";

async function getOneFile(id:ObjectId, repository:FileRepository){
    try {
        const result = await repository.getOneRep(id);

        if (!result) {
        return newError(`The file with the id ${id} wasn't found`, 404, "!result")
        }

        return newSuccess("The file was successfully found.", 200, result)

    } catch (error: any) {
        return serverError(error, "getOneFile catch")
    }
}

export default getOneFile