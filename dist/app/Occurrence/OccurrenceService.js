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
const createOccurrence_service_1 = __importDefault(require("./features/createOccurrence.service"));
const getFromTimeline_service_1 = __importDefault(require("./features/getFromTimeline.service"));
const getAllOccurrences_service_1 = __importDefault(require("./features/getAllOccurrences.service"));
const getOneOccurrence_service_1 = __importDefault(require("./features/getOneOccurrence.service"));
const updateOccurrence_service_1 = __importDefault(require("./features/updateOccurrence.service"));
const deleteOccurrence_service_1 = __importDefault(require("./features/deleteOccurrence.service"));
class OccurrenceService {
    constructor(repository, TimelineRepository) {
        this.repository = repository;
        this.TimelineRepository = TimelineRepository;
    }
    createSer(occurrence) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, createOccurrence_service_1.default)(occurrence, this.repository, this.TimelineRepository);
        });
    }
    getFromParentSer(timelineId, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, getFromTimeline_service_1.default)(timelineId, page, limit, this.repository);
        });
    }
    getAllSer(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, getAllOccurrences_service_1.default)(page, limit, this.repository);
        });
    }
    getOneSer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getOneOccurrence_service_1.default)(id, this.repository);
        });
    }
    updateSer(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, updateOccurrence_service_1.default)(id, body, this.repository);
        });
    }
    deleteSer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, deleteOccurrence_service_1.default)(id, this.repository);
        });
    }
}
exports.default = OccurrenceService;
