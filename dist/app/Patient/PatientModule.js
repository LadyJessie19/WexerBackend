"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserModule_1 = __importDefault(require("../User/UserModule"));
const PatientController_1 = __importDefault(require("./PatientController"));
const PatientEntity_1 = __importDefault(require("./PatientEntity"));
const PatientRepository_1 = __importDefault(require("./PatientRepository"));
const PatientService_1 = __importDefault(require("./PatientService"));
class PatientModule {
    static build() {
        const repository = new PatientRepository_1.default(PatientEntity_1.default);
        const service = new PatientService_1.default(repository, UserModule_1.default.build().repository);
        const controller = new PatientController_1.default(service);
        return { repository, service, controller };
    }
}
exports.default = PatientModule;
