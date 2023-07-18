import UserModule from "../User/UserModule";
import PatientController from "./PatientController";
import Patient from "./PatientEntity";
import PatientRepository from "./PatientRepository";
import PatientService from "./PatientService";

class PatientModule {
    static build(){
        const repository = new PatientRepository(Patient)
        const service = new PatientService(repository, UserModule.build().repository)
        const controller = new PatientController(service)
        return { repository, service, controller }
    }
}

export default PatientModule