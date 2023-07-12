import { CreateDoctorDTO } from "./DoctorDTO"

class DoctorFactory {
    static newDoctor(body:CreateDoctorDTO){
        return {
            name: body.name,
            email: body.email,
            password: body.password
        }
    }
}

export default DoctorFactory