import { Request, Response } from "express";
import PatientService from "./PatientService";

class PatientController{
    constructor(private service: PatientService){}

    //Add Yup validation

    async something(req: Request, res: Response){
        const { body } = req
        const result = await this.service.createSer(body)
        return res.status(200).send({msg: "found!", result})
    }
}

export default PatientController