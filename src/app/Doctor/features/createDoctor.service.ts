import DoctorRepository from "../DoctorRepository"
import { ServiceDoctorDTO } from "../DoctorDTO"

import newError from "../../../utils/ErrorHandler"
import serverError from "../../../utils/ServerError"
import newSuccess from "../../../utils/SuccessHandler"

import DataEncrypt from "../../../utils/DataEncrypt"

async function createDoctor(payload:ServiceDoctorDTO, repository:DoctorRepository) {
    
    const isANewDoctor = await repository.findByEmail(payload.email)
    if(isANewDoctor){
        return newError('A doctor with this email already exists', 400, "isANewDoctor")
    }

    try {
        const passwordHashed = DataEncrypt.hash(payload.password, 8)
        const doctor = {...payload, password: passwordHashed}
        const result = await repository.createRep(doctor)
        return newSuccess("Doctor created!", 201, result)

    } catch (error:any) {
        if (error.errors) {
        return newError(error.message, 400, "createDoctor catch")
    }
    //last-return
    return serverError(error, "last-return")
}
}

export default createDoctor