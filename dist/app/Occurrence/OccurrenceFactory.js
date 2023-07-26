"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OccurrenceFactory {
    static newOccurrence(body) {
        return {
            title: body.title,
            content: body.content,
            kind: body.kind
        };
    }
}
exports.default = OccurrenceFactory;
