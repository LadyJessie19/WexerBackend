import DoctorRepository from "./DoctorRepository"

import { ServiceDoctorDTO } from "./DoctorDTO";

import createDoctor from "./features/createDoctor.service";
import getAllDoctors from "./features/getAllDoctors.service";
import getOneDoctor from "./features/getOneDoctor.service";
import updateDoctor from "./features/updateDoctor.service";
import deleteDoctor from "./features/deleteDoctor.service";
import { ObjectId } from "mongoose";

class DoctorService{
    constructor(private repository:DoctorRepository){}//After, add photoRepository

    async createSer(body:ServiceDoctorDTO){//exchange the DTO to the one with photo
        return await createDoctor(body, this.repository)
    }

    async getAllSer(page:number, limit:number){
        return await getAllDoctors(page, limit, this.repository)
    }

    async getOneSer(id:ObjectId){
        return await getOneDoctor(id, this.repository)
    }

    async updateSer(id:ObjectId, body:ServiceDoctorDTO){
        return await updateDoctor(id, body, this.repository)
    }

    async deleteSer(id:ObjectId){
        return await deleteDoctor(id, this.repository)
    }
}

export default DoctorService