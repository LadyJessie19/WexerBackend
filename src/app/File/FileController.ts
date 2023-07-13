import { Request, Response } from "express";
import FileService from "./FileService";

class FileController{
    constructor(private service: FileService){}

    //Add Yup validation

    async something(req: Request, res: Response){
        const { body } = req
        const result = await this.service.createSer(body)
        return res.status(200).send({msg: "found!", result})
    }
}

export default FileController