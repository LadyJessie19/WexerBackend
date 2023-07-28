import { CreatePatientDTO } from "../Patient/PatientDTO";

interface CreateUserDTO {
    name:string,
    email:string,
    password:string
}

interface ServiceUserDTO extends CreateUserDTO {
    patients: Array<CreatePatientDTO>
}

export { CreateUserDTO, ServiceUserDTO }