import { CreateFileDTO } from "../File/FileDTO"
import { CreatePatientDTO } from "../Patient/PatientDTO";

interface CreateDoctorDTO {
    name:string,
    email:string,
    password:string
}

interface ServiceDoctorDTO extends CreateDoctorDTO {
    patients: Array<CreatePatientDTO>
    image: CreateFileDTO;
}

export { CreateDoctorDTO, ServiceDoctorDTO }