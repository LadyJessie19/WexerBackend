import TimelineRepository from "./TimelineRepository";
import PatientRepository from "../Patient/PatientRepository";

import { ServiceTimelineDTO, TimelineWithPatientIdDTO } from "./TimelineDTO";

import createTimeline from "./features/createTimeline.service";
import getFromPatient from "./features/getFromPatient.service";
import getAllTimelines from "./features/getAllTimelines.service";
import getOneTimeline from "./features/getOneTimeline.service";
import updateTimeline from "./features/updateTimeline.service";
import deleteTimeline from "./features/deleteTimeline.service";
import { ObjectId } from "mongoose";

class TimelineService{
    constructor(private repository:TimelineRepository, private PatientRepository:PatientRepository){}

    async createSer(timeline:TimelineWithPatientIdDTO){
        return createTimeline(timeline, this.repository, this.PatientRepository)
    }

    async getFromPatientSer(patientId:ObjectId, page:number, limit:number){
      return getFromPatient(patientId, page, limit, this.repository)
    }

    async getAllSer(page:number, limit:number){
      return getAllTimelines(page, limit, this.repository)
    }

    async getOneSer(id:ObjectId){
      return await getOneTimeline(id, this.repository)
    }

    async updateSer(id:ObjectId, body:ServiceTimelineDTO){
      return await updateTimeline(id, body, this.repository)
    }

    async deleteSer(id:ObjectId){
      return await deleteTimeline(id, this.repository)
    }
}

export default TimelineService