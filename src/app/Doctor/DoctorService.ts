import DoctorRepository from "./DoctorRepository"
import { ServiceDoctorDTO } from "./DoctorDTO";

import createDoctor from "./features/createDoctor.service";
import getOneDoctor from "./features/getOneDoctor.service";
import getAllDoctors from "./features/getAllDoctors.service";

class DoctorService{
    constructor(private repository:DoctorRepository){}//After, add photoRepository

    async createSer(body:ServiceDoctorDTO){//exchange the DTO to the one with photo
        return await createDoctor(body, this.repository)
    }

    async getOneSer(id:string){
        return await getOneDoctor(id, this.repository)
    }

    async getAllSer(){
        return await getAllDoctors(this.repository)
    }
}

export default DoctorService