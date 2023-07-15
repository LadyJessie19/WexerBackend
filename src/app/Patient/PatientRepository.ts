import Patient from './PatientEntity'
import { CreatePatientDTO } from "./PatientDTO";
import { ObjectId } from 'mongoose';

class PatientRepository {
    constructor(private model: typeof Patient){}

    async createRep(patient:CreatePatientDTO){
        return this.model.create(patient);
    }

    async getAllRep(){
        return this.model.find().populate("timelines")
    }

    async pushTimeline(patientId: ObjectId, timelineId: ObjectId){
        return this.model.findByIdAndUpdate(patientId, {
            $push: { users: [timelineId] }
        }, { new: true }).populate('timelines')
    }
}

export default PatientRepository