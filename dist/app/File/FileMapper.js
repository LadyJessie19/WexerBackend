"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const url = process.env.USER_URL;
class FileMapper {
    static toClient(file) {
        return {
            "link": `${url}${file.filename}`,
            "id": file._id,
            "filename": file.filename,
            "mimetype": file.mimetype,
            "userId": file.userId
        };
    }
}
exports.default = FileMapper;
