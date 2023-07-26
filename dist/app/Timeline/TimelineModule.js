"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PatientModule_1 = __importDefault(require("../Patient/PatientModule"));
const TimelineController_1 = __importDefault(require("./TimelineController"));
const TimelineEntity_1 = __importDefault(require("./TimelineEntity"));
const TimelineRepository_1 = __importDefault(require("./TimelineRepository"));
const TimelineService_1 = __importDefault(require("./TimelineService"));
class TimelineModule {
    static build() {
        const repository = new TimelineRepository_1.default(TimelineEntity_1.default);
        const service = new TimelineService_1.default(repository, PatientModule_1.default.build().repository);
        const controller = new TimelineController_1.default(service);
        return { repository, service, controller };
    }
}
exports.default = TimelineModule;
