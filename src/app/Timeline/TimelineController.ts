import { Request, Response } from "express";
import TimelineService from "./TimelineService";

import TimelineYupSchema from "./TimelineSchema";

import newError from "../../utils/ErrorHandler";
import { ObjectId } from "mongoose";

class TimelineController{
    constructor(private service: TimelineService){}

    async createCon(req: Request, res: Response){
      const { body, params: { patient_id } } = req

      const payload = { ...body, patientId: patient_id }

      try {
          await TimelineYupSchema.create().validate(payload)
        } catch (error: any) {
          return res.status(400).json({ errors: error.errors })
        }

      const result = await this.service.createSer(payload)

      if ('error' in result) {
        return res.status(result.statusCode).json(result)
      }

      return res.status(result.statusCode).send(result)
  }

  async getFromParentCon(req: Request, res: Response){
    const { query:{ page = 1, limit = 10}, params:{ patient_id } } = req
      const result = await this.service.getFromParentSer(patient_id as unknown as ObjectId, Number(page), Number(limit))
      
      if('error' in result) {
      return res.status(result.statusCode).json(result)
      }

      return res.status(result.statusCode).json(result)
  }

  async getAllCon(req: Request, res: Response){
    const { query:{ page = 1, limit = 10} } = req
      const result = await this.service.getAllSer(Number(page), Number(limit))
      
      if('error' in result) {
      return res.status(result.statusCode).json(result)
      }

      return res.status(result.statusCode).json(result)
  }

  async getOneCon(req: Request, res: Response){
    const { params:{ timeline_id } } = req
      const result = await this.service.getOneSer(timeline_id as unknown as ObjectId)

      if("error" in result){
          return res.status(result.statusCode).json(result)
      }

      return res.status(result.statusCode).json(result)
  }

  async updateCon(req: Request, res: Response){
    const { body, params: { timeline_id } } = req
      const id = timeline_id as unknown as ObjectId
      const payload = {id, body}

      try {
          await TimelineYupSchema.update().validate(payload)
      } catch (error: any) {
          return res.status(400).json(newError("The id/body is invalid", 400))
      }
      
      const result = await this.service.updateSer(timeline_id as unknown as ObjectId, body)
      
      if('error' in result) {
      return res.status(400).json(newError("The update request has failed.", 400, "result updateCon"))
      }

      return res.status(result.statusCode).json(result)
  }

  async deleteCon(req: Request, res: Response){
    const { timeline_id } = req.params
    const id = timeline_id as unknown as ObjectId
      
      try {
          await TimelineYupSchema.delete().validate({ id })
      } catch (error:any) {
          return res.status(400).json(newError("The id/body is invalid", 400))
      }
      
      const result = await this.service.deleteSer(timeline_id as unknown as ObjectId)
      return res.status(result.statusCode).json(result)
  }
}

export default TimelineController