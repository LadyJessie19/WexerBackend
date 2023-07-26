"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PatientSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    demands: {
        type: String,
        required: true
    },
    personalAnnotations: {
        type: String,
        required: true
    },
    timelines: [{
            type: mongoose_1.default.SchemaTypes.ObjectId,
            ref: 'Timeline'
        }],
    userId: {
        type: mongoose_1.default.SchemaTypes.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });
const Patient = mongoose_1.default.model("Patient", PatientSchema);
exports.default = Patient;
