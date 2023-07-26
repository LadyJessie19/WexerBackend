"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createTimeline_service_1 = __importDefault(require("./features/createTimeline.service"));
const getFromPatient_service_1 = __importDefault(require("./features/getFromPatient.service"));
const getAllTimelines_service_1 = __importDefault(require("./features/getAllTimelines.service"));
const getOneTimeline_service_1 = __importDefault(require("./features/getOneTimeline.service"));
const updateTimeline_service_1 = __importDefault(require("./features/updateTimeline.service"));
const deleteTimeline_service_1 = __importDefault(require("./features/deleteTimeline.service"));
class TimelineService {
    constructor(repository, PatientRepository) {
        this.repository = repository;
        this.PatientRepository = PatientRepository;
    }
    createSer(timeline) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, createTimeline_service_1.default)(timeline, this.repository, this.PatientRepository);
        });
    }
    getFromParentSer(patientId, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, getFromPatient_service_1.default)(patientId, page, limit, this.repository);
        });
    }
    getAllSer(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, getAllTimelines_service_1.default)(page, limit, this.repository);
        });
    }
    getOneSer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getOneTimeline_service_1.default)(id, this.repository);
        });
    }
    updateSer(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, updateTimeline_service_1.default)(id, body, this.repository);
        });
    }
    deleteSer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, deleteTimeline_service_1.default)(id, this.repository);
        });
    }
}
exports.default = TimelineService;
