"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OccurrenceFactory {
    static newOccurrence(body, timelineId) {
        return {
            title: body.title,
            content: body.content,
            kind: body.kind,
            timelineId
        };
    }
}
exports.default = OccurrenceFactory;
