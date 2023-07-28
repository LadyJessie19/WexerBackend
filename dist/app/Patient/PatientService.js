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
const createPatient_service_1 = __importDefault(require("./features/createPatient.service"));
const getFromUser_service_1 = __importDefault(require("./features/getFromUser.service"));
const getAllPatients_service_1 = __importDefault(require("./features/getAllPatients.service"));
const getOnePatient_service_1 = __importDefault(require("./features/getOnePatient.service"));
const updatePatient_service_1 = __importDefault(require("./features/updatePatient.service"));
const deletePatient_service_1 = __importDefault(require("./features/deletePatient.service"));
class PatientService {
    constructor(repository, UserRepository) {
        this.repository = repository;
        this.UserRepository = UserRepository;
    }
    createSer(patient) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, createPatient_service_1.default)(patient, this.repository, this.UserRepository);
        });
    }
    getFromParentSer(userId, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, getFromUser_service_1.default)(userId, page, limit, this.repository);
        });
    }
    getAllSer(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, getAllPatients_service_1.default)(page, limit, this.repository);
        });
    }
    getOneSer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getOnePatient_service_1.default)(id, this.repository);
        });
    }
    updateSer(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, updatePatient_service_1.default)(id, body, this.repository);
        });
    }
    deleteSer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, deletePatient_service_1.default)(id, this.repository, this.UserRepository);
        });
    }
}
exports.default = PatientService;
