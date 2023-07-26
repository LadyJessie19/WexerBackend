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
const createFile_service_1 = __importDefault(require("./features/createFile.service"));
const getFromOccurrence_service_1 = __importDefault(require("./features/getFromOccurrence.service"));
const getAllFiles_service_1 = __importDefault(require("./features/getAllFiles.service"));
const getOneFile_service_1 = __importDefault(require("./features/getOneFile.service"));
const deleteFile_service_1 = __importDefault(require("./features/deleteFile.service"));
class FileService {
    constructor(repository, occurrenceRepository) {
        this.repository = repository;
        this.occurrenceRepository = occurrenceRepository;
    }
    createSer(file) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, createFile_service_1.default)(file, this.repository, this.occurrenceRepository);
        });
    }
    getFromParentSer(occurrenceId, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, getFromOccurrence_service_1.default)(occurrenceId, page, limit, this.repository);
        });
    }
    getAllSer(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, getAllFiles_service_1.default)(page, limit, this.repository);
        });
    }
    getOneSer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getOneFile_service_1.default)(id, this.repository);
        });
    }
    deleteSer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, deleteFile_service_1.default)(id, this.repository);
        });
    }
}
exports.default = FileService;
