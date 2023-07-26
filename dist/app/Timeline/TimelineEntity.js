"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TimelineSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    occurrences: [{
            type: mongoose_1.default.SchemaTypes.ObjectId,
            ref: 'Occurrence'
        }],
    patientId: {
        type: mongoose_1.default.SchemaTypes.ObjectId,
        ref: 'Patient'
    }
}, { timestamps: true });
const Timeline = mongoose_1.default.model("Timeline", TimelineSchema);
exports.default = Timeline;
