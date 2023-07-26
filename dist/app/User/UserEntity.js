"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        select: false
    },
    patients: [{
            type: mongoose_1.default.SchemaTypes.ObjectId,
            ref: 'Patient'
        }]
    //this is for the photo
    // photo: { type: mongoose.SchemaTypes.ObjectId, ref: 'Photo', required: true },
}, { timestamps: true });
const User = mongoose_1.default.model("User", UserSchema);
exports.default = User;
