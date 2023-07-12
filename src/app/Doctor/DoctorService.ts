import DoctorRepository from "./DoctorRepository"
import newError from "../../utils/ErrorHandler";
import DataEncrypt from "../../utils/DataEncrypt";
import { CreateDoctorDTO } from "./DoctorDTO";

class DoctorService{
    constructor(private repository:DoctorRepository){}
    //After, add photoRepository
    async createSer(body:CreateDoctorDTO){//exchange the DTO to the one with photo
        //Verify if user exists
        const isNewDoctor = await this.repository.findByEmail(body.email)
        if(!isNewDoctor){
            return newError('A doctor with this email already exists', 400)
        }

        //connecting the body.photo with photo repository
        // const photo = await this.photoRepository.createRep(body.photo)
        //attention! the createRep must return the photo object

        //create doctor
        // const payload = {...body, password: DataEncrypt.hash(body.password, 8), photo:photo.id}
        const payload = {...body, password: DataEncrypt.hash(body.password, 8)}

        const result = await this.repository.createRep(payload)

        return {message: "Doctor created!", result}
        //return { ...(result as any)._doc, photo }
    }
}

export default DoctorService