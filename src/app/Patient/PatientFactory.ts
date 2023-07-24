import { CreatePatientDTO } from "./PatientDTO"

class PatientFactory {
    static newPatient(body:CreatePatientDTO){
        return {
            name: body.name,
            birthdate: body.birthdate,
            contact: body.contact,
            demands: body.demands,
            personalAnnotations: body.personalAnnotations
        }
    }
}

export default PatientFactory