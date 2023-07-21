import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    mimetype: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    occurrenceId:{
        type: mongoose.Types.ObjectId,
        ref: "Occurrence"
    }}, { timestamps:true })

const File = mongoose.model("File", FileSchema)

export default File