import { Request, Response } from "express";
import OccurrenceService from "./OccurrenceService";

import OccurrenceYupSchema from "./OccurrenceSchema";

import { ObjectId } from "mongoose";
import newError from "../../utils/ErrorHandler";

class OccurrenceController{
  constructor(private service: OccurrenceService){}

  async createCon(req: Request, res: Response){
      const { body, params: { timeline_id } } = req

      const payload = { ...body, timelineId: timeline_id }

      try {
          await OccurrenceYupSchema.create().validate(payload)
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
    const { query:{ page = 1, limit = 10}, params:{ timeline_id } } = req
      const result = await this.service.getFromParentSer(timeline_id as unknown as ObjectId, Number(page), Number(limit))
      
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
    const { params:{ occurrence_id } } = req
      const result = await this.service.getOneSer(occurrence_id as unknown as ObjectId)

      if("error" in result){
          return res.status(result.statusCode).json(result)
      }

      return res.status(result.statusCode).json(result)
  }

  async updateCon(req: Request, res: Response){
    const { body, params: { occurrence_id } } = req
      const id = occurrence_id as unknown as ObjectId
      const payload = {id, body}

      try {
        await OccurrenceYupSchema.update().validate(payload)
      } catch (error: any) {
        return res.status(400).json(newError("The id/body is invalid", 400))
      }
      
      const result = await this.service.updateSer(occurrence_id as unknown as ObjectId, body)
      
      if('error' in result) {
      return res.status(400).json(newError("The update request has failed.", 400, "result updateCon"))
      }

      return res.status(result.statusCode).json(result)
  }

  async deleteCon(req: Request, res: Response){
    const { occurrence_id } = req.params
    const id = occurrence_id as unknown as ObjectId
      
      try {
          await OccurrenceYupSchema.delete().validate({ id })
      } catch (error:any) {
          return res.status(400).json(newError("The id is invalid", 400))
      }
      
      const result = await this.service.deleteSer(occurrence_id as unknown as ObjectId)
      return res.status(result.statusCode).json(result)
  }
}

export default OccurrenceController