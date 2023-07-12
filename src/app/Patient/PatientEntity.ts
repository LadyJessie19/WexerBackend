import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    demands:{
        type: String,
        required: true
    },
    personalAnnotations:{
        type: String,
        required: true
    },
    timelines:[{
        type: mongoose.SchemaTypes.ObjectId, 
        ref: 'Timeline',
        autopopulate: true
    }]
}, { timestamps:true })

const Patient = mongoose.model("Patient", PatientSchema)

export default Patient