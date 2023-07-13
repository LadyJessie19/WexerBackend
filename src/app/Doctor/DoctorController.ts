import { Request, Response } from "express"
import DoctorYupSchema from "./DoctorSchema"
import DoctorService from "./DoctorService"

class DoctorController {
    constructor(private service:DoctorService){}

    async createCon(req:Request, res:Response){
        const { body } = req //don't forget to add _file_ to req destruct
        //yup validation
        try{
            await DoctorYupSchema.create().validate(body)
        } catch(err:any){
            return res.status(400).json({errors:err.errors})
        }
        //this is for foreward - photo upload

        /* 
            const payload = {...body, photo: {
                filename:file?.filename,
                mimetype:file?.mimetype
            }}
        */
        
        const result = await this.service.createSer(body)//.createSer(payload) as any
        
        if("error" in result){
            return res.status(result.statusCode).json(result)
        }

        return res.status(201).json(result)
    }

    async something(){
        return {msg: "something was here"}
    }
}

export default DoctorController