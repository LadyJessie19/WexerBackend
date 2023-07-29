import FileRepository from "../FileRepository";

import newError from "../../../utils/ErrorHandler";
import newSuccess from "../../../utils/SuccessHandler";
import { ObjectId } from "mongoose";
import FileMapper from "../FileMapper";

async function getOneFile(id:ObjectId, repository:FileRepository){
    const file = await repository.getOneRep(id);

    if (!file) {
    return newError(`The file with the id ${id} wasn't found.`, 404, "!result")
    }

    const result = FileMapper.toClient(file)

    return newSuccess("The file was successfully found.", 200, result)
}

export default getOneFile