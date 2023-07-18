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

/* 
const { body, params: { board_id } } = req

    try {
      await makeCreateTaskSchema().validate(body)
    } catch (error: any) {
      return res.status(400).json({ errors: error.errors })
    }

    const result = await this.service.create({ ...body, boardId: board_id }) as any
    if ('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(201).json(result)
*/