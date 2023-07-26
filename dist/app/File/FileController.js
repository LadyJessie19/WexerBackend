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
const FileSchema_1 = __importDefault(require("./FileSchema"));
const ErrorHandler_1 = __importDefault(require("../../utils/ErrorHandler"));
const mongoose_1 = require("mongoose");
class FileController {
    constructor(service) {
        this.service = service;
    }
    createCon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params: { occurrence_id }, file } = req;
            const payload = {
                filename: file === null || file === void 0 ? void 0 : file.filename,
                mimetype: file === null || file === void 0 ? void 0 : file.mimetype,
                occurrenceId: occurrence_id
            };
            try {
                yield FileSchema_1.default.create().validate(payload);
            }
            catch (error) {
                return res.status(400).json({ errors: error.errors });
            }
            const result = yield this.service.createSer(payload);
            if ("error" in result) {
                return res.status(result.statusCode).json(result);
            }
            return res.status(result.statusCode).send(result);
        });
    }
    getFromParentCon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { query: { page = 1, limit = 10 }, params: { occurrence_id } } = req;
            const result = yield this.service.getFromParentSer(occurrence_id, Number(page), Number(limit));
            if ('error' in result) {
                return res.status(result.statusCode).json(result);
            }
            return res.status(result.statusCode).json(result);
        });
    }
    getAllCon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { query: { page = 1, limit = 10 } } = req;
            const result = yield this.service.getAllSer(Number(page), Number(limit));
            if ('error' in result) {
                return res.status(result.statusCode).json(result);
            }
            return res.status(result.statusCode).json(result);
        });
    }
    getOneCon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params: { file_id } } = req;
            const isValid = mongoose_1.Types.ObjectId.isValid(file_id);
            if (isValid) {
                const result = yield this.service.getOneSer(file_id);
                if ("error" in result) {
                    return res.status(result.statusCode).json(result);
                }
                return res.status(result.statusCode).json(result);
            }
            return res.status(400).json("The Id is not valid");
        });
    }
    deleteCon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { file_id } = req.params;
            const id = file_id;
            try {
                yield FileSchema_1.default.delete().validate({ id });
            }
            catch (error) {
                return res.status(400).json((0, ErrorHandler_1.default)("The id is invalid", 400));
            }
            const result = yield this.service.deleteSer(file_id);
            return res.status(result.statusCode).json(result);
        });
    }
}
exports.default = FileController;
