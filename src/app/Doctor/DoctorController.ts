import { Request, Response } from "express"
import DoctorService from "./DoctorService"

import DoctorYupSchema from "./DoctorSchema"

import serverError from "../../utils/ServerError"
import newError from "../../utils/ErrorHandler"
import { ObjectId } from "mongoose"

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
        const { query:{ page = 1, limit = 10} } = req
        const result = await this.service.getAllSer(page as number, limit as number)
        
        if('error' in result) {
        return res.status(result.statusCode).json(result)
        }

        return res.status(result.statusCode).json(result)
    }

    async getOneCon(req:Request, res:Response){
        const { params:{ id } } = req
        const result = await this.service.getOneSer(id as unknown as ObjectId)

        if("error" in result){
            return res.status(result.statusCode).json(result)
        }

        return res.status(result.statusCode).json(result)
    }

    async updateCon(req:Request, res:Response){
        const { body, params: { id } } = req
        const payload = {id, body}

        try {
            await DoctorYupSchema.update().validate(payload)
        } catch (error: any) {
            return res.status(400).json(newError("The id/body is invalid", 400))
        }
        
        const result = await this.service.updateSer(id as unknown as ObjectId, body)
        
        if('error' in result) {
        return res.status(400).json(newError("The request failed", 400, "result updateCon"))
        }

        return res.status(400).json(result)
    }

    async deleteCon(req:Request, res:Response){
        const { id } = req.params
        
        try {
            await DoctorYupSchema.delete().validate(req.params)
        } catch (error:any) {
            return res.status(400).json(serverError(error))
        }
        
        const result = await this.service.deleteSer(id as unknown as ObjectId)
        return res.status(result.statusCode).json(result)
    }
}

export default DoctorController