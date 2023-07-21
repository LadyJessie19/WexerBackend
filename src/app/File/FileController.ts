import { Request, Response } from "express";
import FileService from "./FileService";

import FileYupSchema from "./FileSchema";

import newError from "../../utils/ErrorHandler";
import { ObjectId } from "mongoose";

class FileController {
  constructor(private service: FileService) {}

  async createFromUserCon(req: Request, res: Response) {
    const { body, params:{ user_id }, file } = req;

    const payload = { ...body, userId: user_id };

    try {
      await FileYupSchema.create().validate(payload);
    } catch (error: any) {
      return res.status(400).json({ errors: error.errors });
    }

    /* const bigload = { ...payload, photo: {
      filename: file?.filename,
      mimetype: file?.mimetype,
    }} */

    const result = await this.service.createFromUserSer(payload);

    if ("error" in result) {
      return res.status(result.statusCode).json(result);
    }

    return res.status(result.statusCode).send(result);
  }

  async getFromUserCon(req: Request, res: Response) {
    const { query:{ page = 1, limit = 10}, params:{ user_id } } = req
      const result = await this.service.getFromUserSer(user_id as unknown as ObjectId, Number(page), Number(limit))
      
      if('error' in result) {
      return res.status(result.statusCode).json(result)
      }

      return res.status(result.statusCode).json(result)
  }

  async createFromOccurrenceCon(req: Request, res: Response) {
    const { body, params: { occurrence_id } } = req;

    const payload = { ...body, occurrenceId: occurrence_id };

    try {
      await FileYupSchema.create().validate(payload);
    } catch (error: any) {
      return res.status(400).json({ errors: error.errors });
    }

    const result = await this.service.createFromOccurrenceSer(payload);

    if ("error" in result) {
      return res.status(result.statusCode).json(result);
    }

    return res.status(result.statusCode).send(result);
  }

  async getFromOccurrenceCon(req: Request, res: Response) {
    const { query:{ page = 1, limit = 10}, params:{ occurrence_id } } = req
      const result = await this.service.getFromOccurrenceSer(occurrence_id as unknown as ObjectId, Number(page), Number(limit))
      
      if('error' in result) {
      return res.status(result.statusCode).json(result)
      }

      return res.status(result.statusCode).json(result)
  }

  async getAllCon(req: Request, res: Response) {
    const { query:{ page = 1, limit = 10} } = req
      const result = await this.service.getAllSer(Number(page), Number(limit))
      
      if('error' in result) {
      return res.status(result.statusCode).json(result)
      }

      return res.status(result.statusCode).json(result)
  }

  async getOneCon(req: Request, res: Response) {
    const { params:{ file_id } } = req
      const result = await this.service.getOneSer(file_id as unknown as ObjectId)

      if("error" in result){
          return res.status(result.statusCode).json(result)
      }

      return res.status(result.statusCode).json(result)
  }

  async deleteCon(req: Request, res: Response) {
    const { file_id } = req.params
    const id = file_id as unknown as ObjectId
      
      try {
          await FileYupSchema.delete().validate({ id })
      } catch (error:any) {
          return res.status(400).json(newError("The id is invalid", 400))
      }
      
      const result = await this.service.deleteSer(file_id as unknown as ObjectId)
      return res.status(result.statusCode).json(result)
  }
}

export default FileController;
