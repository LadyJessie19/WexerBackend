import DoctorRepository from "./DoctorRepository"
import { ServiceDoctorDTO } from "./DoctorDTO";

import createDoctor from "./features/createDoctor.service";
import getAllDoctors from "./features/getAllDoctors.service";
import deleteDoctor from "./features/deleteDoctor.service";
import { ObjectId } from "mongoose";
import updateDoctor from "./features/updateDoctor.service";

class DoctorService{
    constructor(private repository:DoctorRepository){}//After, add photoRepository

    async createSer(body:ServiceDoctorDTO){//exchange the DTO to the one with photo
        return await createDoctor(body, this.repository)
    }

    async getAllSer(page:number, limit:number){
        return await getAllDoctors(this.repository, Number(page), Number(limit))
    }

    async updateSer(id:ObjectId, body:ServiceDoctorDTO){
        return await updateDoctor(id, body, this.repository)
    }

    async deleteSer(id:ObjectId){
        return await deleteDoctor(id, this.repository)
    }
}

export default DoctorService