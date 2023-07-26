"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const OccurrenceSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    kind: {
        type: String,
        enum: ["session", "relevant-fact"],
        required: true,
    },
    files: [{
            type: mongoose_1.default.SchemaTypes.ObjectId,
            ref: 'File'
        }],
    timelineId: {
        type: mongoose_1.default.SchemaTypes.ObjectId,
        ref: 'Timeline',
    }
}, { timestamps: true });
const Occurrence = mongoose_1.default.model("Occurrence", OccurrenceSchema);
exports.default = Occurrence;
