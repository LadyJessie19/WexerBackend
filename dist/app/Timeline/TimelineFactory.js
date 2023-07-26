"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TimelineFactory {
    static newTimeline(body) {
        return {
            name: body.name
        };
    }
}
exports.default = TimelineFactory;
