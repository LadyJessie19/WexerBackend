import { Request, Response } from "express";
import TimelineService from "./TimelineService";

class TimelineController{
    constructor(private service: TimelineService){}

    //Add Yup validation

    async something(req: Request, res: Response){
        const { body } = req
        const result = await this.service.createSer(body)
        return res.status(200).send({msg: "found!", result})
    }
}

export default TimelineController