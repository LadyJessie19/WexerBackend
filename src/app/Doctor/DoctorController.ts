import { Request, Response } from "express"
import DoctorYupSchema from "./DoctorSchema"
import DoctorService from "./DoctorService"

class DoctorController {
    constructor(private service:DoctorService){}

    async createCon(req:Request, res:Response){
        const { body } = req //don't forget to add _file_ to req destruct
    
        try{
            await DoctorYupSchema.create().validate(body)
        } catch(err:any){
            return res.status(400).json({errors:err.errors})
        }
        
        const result = await this.service.createSer(body)//.createSer(payload) as any
        
        if("error" in result){
            return res.status(result.statusCode).json(result)
        }

        return res.status(201).json(result)
    }

    async getAllCon(req:Request, res:Response){
        const result = await this.service.getAllSer()
        
        if('error' in result) {
        return res.status(result.statusCode).json(result)
        }

        return res.status(201).json(result)
    }

    async getOneCon(req:Request, res:Response){
        const { params:{ id } } = req
        const result = await this.service.getOneSer(id)//.createSer(payload) as any
        
        if("error" in result){
            return res.status(result.statusCode).json(result)
        }

        return res.status(201).json(result)
    }

    async updateCon(req:Request, res:Response){
        
    }

    async deleteCon(req:Request, res:Response){
        
    }
}

export default DoctorController