import { Request, Response } from "express";
import FileService from "./FileService";

import FileYupSchema from "./FileSchema";

import newError from "../../utils/ErrorHandler";
import { ObjectId, Types } from "mongoose";
import FileFactory from "./FileFactory";

class FileController {
  constructor(private service: FileService) {}

  async createCon(req: Request, res: Response) {
    const { params: { occurrence_id }, file } = req;

    const body = {
      filename: file?.filename,
      mimetype: file?.mimetype
    }

    const payload = FileFactory.newFile(body, occurrence_id as unknown as ObjectId)

    try {
      await FileYupSchema.create().validate(payload);
    } catch (error: any) {
      return res.status(400).json({ errors: error.errors });
    }

    const result = await this.service.createSer(payload);

    if ("error" in result) {
      return res.status(result.statusCode).json(result);
    }

    return res.status(result.statusCode).send(result);
  }

  async getFromParentCon(req: Request, res: Response) {
    const { query:{ page = 1, limit = 10}, params:{ occurrence_id } } = req
      const result = await this.service.getFromParentSer(occurrence_id as unknown as ObjectId, Number(page), Number(limit))
      
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
    
    const isValid = Types.ObjectId.isValid(file_id)

    if(isValid){
      const result = await this.service.getOneSer(file_id as unknown as ObjectId)
      if("error" in result){
          return res.status(result.statusCode).json(result)
      }
  
      return res.status(result.statusCode).json(result)
    } 

    return res.status(400).json("The Id is not valid")
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
