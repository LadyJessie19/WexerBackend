import mongoose from "mongoose"

const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minLength: 6
    },
    patients:[{
        type: mongoose.SchemaTypes.ObjectId, 
        ref: 'Patient',
        autopopulate: true
    }]
    //this is for the photo
    // photo: { type: mongoose.SchemaTypes.ObjectId, ref: 'Photo', required: true },
}, {timestamps: true})

const Doctor = mongoose.model("Doctor", DoctorSchema)

export default Doctor