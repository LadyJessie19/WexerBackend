"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileEntity_1 = __importDefault(require("./FileEntity"));
const FileController_1 = __importDefault(require("./FileController"));
const FileRepository_1 = __importDefault(require("./FileRepository"));
const FileService_1 = __importDefault(require("./FileService"));
const OccurrenceModule_1 = __importDefault(require("../Occurrence/OccurrenceModule"));
class FileModule {
    static build() {
        const repository = new FileRepository_1.default(FileEntity_1.default);
        const service = new FileService_1.default(repository, OccurrenceModule_1.default.build().repository);
        const controller = new FileController_1.default(service);
        return { repository, service, controller };
    }
}
exports.default = FileModule;
