import { ObjectId } from "mongoose"
import { CreatePatientDTO } from "./PatientDTO"

class PatientFactory {
    static newPatient(body:CreatePatientDTO, userId:ObjectId){
        return {
            name: body.name,
            birthdate: body.birthdate,
            contact: body.contact,
            demands: body.demands,
            personalAnnotations: body.personalAnnotations,
            userId
        }
    }
}

export default PatientFactory