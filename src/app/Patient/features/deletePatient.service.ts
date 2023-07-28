import PatientRepository from "../PatientRepository";
import UserRepository from "../../User/UserRepository";

import newSuccess from "../../../utils/SuccessHandler";
import newError from "../../../utils/ErrorHandler/index";
import { ObjectId } from "mongoose";

async function deletePatient(id:ObjectId, repository:PatientRepository, userRep:UserRepository) {
    const patient = await repository.getOneRep(id)

    if(patient){
        await repository.deleteRep(id);
        await userRep.pullPatient(patient.userId?._id as unknown as ObjectId, id as unknown as ObjectId)
        return newSuccess('The patient was successfully removed.', 200)
    }

    return newError('The patient couldn`t be removed. Please, check the current mongoDB ID.', 400)
}

export default deletePatient