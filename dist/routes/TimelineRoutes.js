"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TimelineModule_1 = __importDefault(require("../app/Timeline/TimelineModule"));
const TimelineRoutes = (0, express_1.Router)();
const timelineController = TimelineModule_1.default.build().controller;
//Create and getAll from a Patient;
const patientPath = "/patients/:patient_id/timelines";
//Get Them ALL!
const commonPath = "/timelines";
//GetOne, update and delete
const pathWithId = "/timelines/:timeline_id";
//Create
TimelineRoutes.post(patientPath, timelineController.createCon.bind(timelineController));
//Read
TimelineRoutes.get(patientPath, timelineController.getFromParentCon.bind(timelineController));
TimelineRoutes.get(commonPath, timelineController.getAllCon.bind(timelineController));
TimelineRoutes.get(pathWithId, timelineController.getOneCon.bind(timelineController));
//Update
TimelineRoutes.patch(pathWithId, timelineController.updateCon.bind(timelineController));
//Delete
TimelineRoutes.delete(pathWithId, timelineController.deleteCon.bind(timelineController));
exports.default = TimelineRoutes;
