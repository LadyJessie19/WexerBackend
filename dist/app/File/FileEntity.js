"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const FileSchema = new mongoose_1.default.Schema({
    filename: {
        type: String,
        required: true
    },
    mimetype: {
        type: String,
        required: true
    },
    occurrenceId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "Occurrence"
    }
}, { timestamps: true });
const File = mongoose_1.default.model("File", FileSchema);
exports.default = File;
