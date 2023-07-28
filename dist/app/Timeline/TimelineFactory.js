"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TimelineFactory {
    static newTimeline(body, patientId) {
        return {
            name: body.name,
            patientId
        };
    }
}
exports.default = TimelineFactory;
