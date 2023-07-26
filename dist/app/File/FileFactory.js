"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileFactory {
    static newFile(body) {
        return {
            filename: body.filename,
            mimetype: body.mimetype
        };
    }
}
exports.default = FileFactory;
