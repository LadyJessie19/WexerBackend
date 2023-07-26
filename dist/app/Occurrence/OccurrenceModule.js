"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TimelineModule_1 = __importDefault(require("../Timeline/TimelineModule"));
const OccurrenceController_1 = __importDefault(require("./OccurrenceController"));
const OccurrenceEntity_1 = __importDefault(require("./OccurrenceEntity"));
const OccurrenceRepository_1 = __importDefault(require("./OccurrenceRepository"));
const OccurrenceService_1 = __importDefault(require("./OccurrenceService"));
class OccurrenceModule {
    static build() {
        const repository = new OccurrenceRepository_1.default(OccurrenceEntity_1.default);
        const service = new OccurrenceService_1.default(repository, TimelineModule_1.default.build().repository);
        const controller = new OccurrenceController_1.default(service);
        return { repository, service, controller };
    }
}
exports.default = OccurrenceModule;
