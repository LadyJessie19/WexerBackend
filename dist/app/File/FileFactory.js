"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileFactory {
    static newFile(body, occurrenceId) {
        return {
            filename: body.filename,
            mimetype: body.mimetype,
            occurrenceId
        };
    }
}
exports.default = FileFactory;
