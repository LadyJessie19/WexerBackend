"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const OccurrenceModule_1 = __importDefault(require("../app/Occurrence/OccurrenceModule"));
const OccurrenceRoutes = (0, express_1.Router)();
const occurrenceController = OccurrenceModule_1.default.build().controller;
//Create and getAll from a timeline;
const timelinePath = "/timelines/:timeline_id/occurrences";
//Get Them ALL!
const commonPath = "/occurrences";
//GetOne, update and delete
const pathWithId = "/occurrences/:occurrence_id";
//Create
OccurrenceRoutes.post(timelinePath, occurrenceController.createCon.bind(occurrenceController));
//Read
OccurrenceRoutes.get(timelinePath, occurrenceController.getFromParentCon.bind(occurrenceController));
OccurrenceRoutes.get(commonPath, occurrenceController.getAllCon.bind(occurrenceController));
OccurrenceRoutes.get(pathWithId, occurrenceController.getOneCon.bind(occurrenceController));
//Update
OccurrenceRoutes.patch(pathWithId, occurrenceController.updateCon.bind(occurrenceController));
//Delete
OccurrenceRoutes.delete(pathWithId, occurrenceController.deleteCon.bind(occurrenceController));
exports.default = OccurrenceRoutes;
