import { Router } from "express";
import OccurrenceModule from "../app/Occurrence/OccurrenceModule";

const OccurrenceRoutes = Router()
const occurrenceController = OccurrenceModule.build().controller

//Create and getAll from a timeline;
const timelinePath = "/timelines/:timeline_id/occurrences"
//Get Them ALL!
const commonPath = "/occurrences"
//GetOne, update and delete
const pathWithId = "/occurrences/:occurrence_id"

//Create
OccurrenceRoutes.post(timelinePath, occurrenceController.createCon.bind(occurrenceController))
//Read
OccurrenceRoutes.get(timelinePath, occurrenceController.getFromParentCon.bind(occurrenceController))
OccurrenceRoutes.get(commonPath, occurrenceController.getAllCon.bind(occurrenceController))
OccurrenceRoutes.get(pathWithId, occurrenceController.getOneCon.bind(occurrenceController))
//Update
OccurrenceRoutes.patch(pathWithId, occurrenceController.updateCon.bind(occurrenceController))
//Delete
OccurrenceRoutes.delete(pathWithId, occurrenceController.deleteCon.bind(occurrenceController))

export default OccurrenceRoutes