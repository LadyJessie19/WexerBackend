"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
class UploadSingle {
    static build(name) {
        const options = multer_1.default.diskStorage({
            destination(req, file, callback) {
                callback(null, 'uploads/');
            },
            filename(req, file, callback) {
                const [, extension] = file.mimetype.split('/');
                callback(null, file.fieldname + "-" + new Date().getTime() + "." + extension);
            },
        });
        const upload = (0, multer_1.default)({ storage: options });
        return upload.single(name);
    }
}
exports.default = UploadSingle;
