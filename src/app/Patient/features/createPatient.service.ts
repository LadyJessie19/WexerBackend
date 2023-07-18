import PatientRepository from "../PatientRepository"
import DoctorRepository from "../../Doctor/DoctorRepository"

import { PatientWithDoctorIdDTO } from "../PatientDTO"

import serverError from "../../../utils/ServerError"
import newSuccess from "../../../utils/SuccessHandler"
import { ObjectId } from "mongoose"

async function createPatient(body:PatientWithDoctorIdDTO, repository:PatientRepository, doctorRep:DoctorRepository){
    try{
        const patientCreated = await repository.createRep(body)
        await doctorRep.pushPatient(body.doctorId, patientCreated._id as unknown as ObjectId)
        return newSuccess("The patient created with success!", 201, {patientCreated})
    } catch(error:any){
        return serverError(error)
    }
}

export default createPatient