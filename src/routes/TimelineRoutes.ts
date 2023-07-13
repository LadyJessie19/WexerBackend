import { Router } from "express";
import TimelineModule from "../app/Timeline/TimelineModule";

const TimelineRoutes = Router()
const timelineController = TimelineModule.build().controller

TimelineRoutes.post('/timelines', timelineController.something.bind(timelineController))

export default TimelineRoutes