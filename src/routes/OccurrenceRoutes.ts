import { Router } from "express";
import OccurrenceModule from "../app/Occurrence/OccurrenceModule";

const OccurrenceRoutes = Router()
const occurrenceController = OccurrenceModule.build().controller

OccurrenceRoutes.post('/occurrences', occurrenceController.something.bind(occurrenceController))

export default OccurrenceRoutes