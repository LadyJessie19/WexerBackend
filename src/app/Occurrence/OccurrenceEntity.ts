import mongoose from "mongoose";

const OccurrenceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    kind:{
        type: String,
        enum: ["session", "relevant-fact"],
        required: true,
    },
    files:[{
        type: mongoose.SchemaTypes.ObjectId, 
        ref: 'File'
    }],
    timelineId:{
        type: mongoose.SchemaTypes.ObjectId, 
        ref: 'Timeline',
    }
}, { timestamps:true })

const Occurrence = mongoose.model("Occurrence", OccurrenceSchema)

export default Occurrence