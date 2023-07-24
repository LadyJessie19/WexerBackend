import OccurrenceRepository from "./OccurrenceRepository"
import TimelineRepository from "../Timeline/TimelineRepository";

import { ServiceOccurrenceDTO, OccurrenceWithTimelineIdDTO } from "./OccurrenceDTO";

import createOccurrence from "./features/createOccurrence.service";
import getFromTimeline from "./features/getFromTimeline.service";
import getAllOccurrences from "./features/getAllOccurrences.service";
import getOneOccurrence from "./features/getOneOccurrence.service";
import updateOccurrence from "./features/updateOccurrence.service";
import deleteOccurrence from "./features/deleteOccurrence.service";
import { ObjectId } from "mongoose";

class OccurrenceService{
  constructor(private repository:OccurrenceRepository, private TimelineRepository:TimelineRepository){}

  async createSer(occurrence:OccurrenceWithTimelineIdDTO){
    return createOccurrence(occurrence, this.repository, this.TimelineRepository)
  }

  async getFromParentSer(timelineId:ObjectId, page:number, limit:number){
    return getFromTimeline(timelineId, page, limit, this.repository)
  }

  async getAllSer(page:number, limit:number){
    return getAllOccurrences(page, limit, this.repository)
  }

  async getOneSer(id:ObjectId){
    return await getOneOccurrence(id, this.repository)
  }

  async updateSer(id:ObjectId, body:ServiceOccurrenceDTO){
    return await updateOccurrence(id, body, this.repository)
  }

  async deleteSer(id:ObjectId){
    return await deleteOccurrence(id, this.repository)
  }
}

export default OccurrenceService