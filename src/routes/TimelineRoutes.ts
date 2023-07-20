import { Router } from "express";
import TimelineModule from "../app/Timeline/TimelineModule";

const TimelineRoutes = Router()
const timelineController = TimelineModule.build().controller

//Create and getAll from a Patient;
const patientPath = "/patients/:patient_id/timelines"
//Get Them ALL!
const commonPath = "/timelines"
//GetOne, update and delete
const pathWithId = "/timelines/:timeline_id"

//Create
TimelineRoutes.post(patientPath, timelineController.createCon.bind(timelineController))
//Read
TimelineRoutes.get(patientPath, timelineController.getFromParentCon.bind(timelineController))
TimelineRoutes.get(commonPath, timelineController.getAllCon.bind(timelineController))
TimelineRoutes.get(pathWithId, timelineController.getOneCon.bind(timelineController))
//Update
TimelineRoutes.patch(pathWithId, timelineController.updateCon.bind(timelineController))
//Delete
TimelineRoutes.delete(pathWithId, timelineController.deleteCon.bind(timelineController))

export default TimelineRoutes