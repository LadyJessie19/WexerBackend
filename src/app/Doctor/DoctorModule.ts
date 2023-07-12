import DoctorController from "./DoctorController";
import Doctor from "./DoctorEntity";
import DoctorRepository from "./DoctorRepository";
import DoctorService from "./DoctorService";

class DoctorModule{
    static build(){
        const repository = new DoctorRepository(Doctor)
        const service = new DoctorService(repository)
        const controller = new DoctorController(service)
        return { repository, service, controller }
    }
}

export default DoctorModule