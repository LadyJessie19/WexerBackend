import mongoose from "mongoose";

const TimelineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    occurrences:[{
        type: mongoose.SchemaTypes.ObjectId, 
        ref: 'Occurrence'
    }],
    patientId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Patient'
    }
}, { timestamps:true })

const Timeline = mongoose.model("Timeline", TimelineSchema)

export default Timeline