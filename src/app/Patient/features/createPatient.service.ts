import PatientRepository from "../PatientRepository"
import DoctorRepository from "../../Doctor/DoctorRepository"

import { PatientWithDoctorIdDTO } from "../PatientDTO"

import serverError from "../../../utils/ServerError"
import newSuccess from "../../../utils/SuccessHandler"
import { ObjectId } from "mongoose"

async function createPatient(patient:PatientWithDoctorIdDTO, repository:PatientRepository, doctorRep:DoctorRepository){
    try{
        const patientCreated = await repository.createRep(patient)
        await doctorRep.pushPatient(patient.doctorId, patientCreated._id as unknown as ObjectId)
        return newSuccess("The patient created with success!", 201, {patientCreated})
    } catch(error:any){
        return serverError(error)
    }
}

export default createPatient