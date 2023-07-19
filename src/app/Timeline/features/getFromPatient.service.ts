import TimelineRepository from "../TimelineRepository";

import newError from "../../../utils/ErrorHandler";
import serverError from "../../../utils/ServerError";
import newSuccess from "../../../utils/SuccessHandler";
import { ObjectId } from "mongoose";

async function getFromPatient(patientId:ObjectId, page: number, limit: number, repository:TimelineRepository) {
    try {
        const skip = (page - 1) * limit;
        const result = await repository.getFromPatientRep(patientId, skip, limit);
        const totalTimelines = result.length;
        const timelineCall = totalTimelines < 2 ? "timeline" : "timelines";

        const totalPages = Math.ceil(totalTimelines / limit);

        const payload = {
            totalPages: totalPages,
            limitPerPage: limit,
            currentPage: Number(page),
            timelines: result
        }

        if(page === 0){
            return newError(`This page doesn't exist.`, 404)
        }

        if(page > totalPages){
            return newError(`The current page is empty. Return to page ${totalPages == 0 ? 1: totalPages}.`, 404)
        }

        if (totalTimelines < 1) {
        return newError("The timelines collection is empty.", 404)
        }
        
        return newSuccess(`There is ${totalTimelines} ${timelineCall} from this patient.`, 200, payload)

    } catch (error: any) {
        return serverError(error, "getFromPatient catch")
    }
}

export default getFromPatient
