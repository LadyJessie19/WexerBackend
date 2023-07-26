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
const OccurrenceSchema_1 = __importDefault(require("./OccurrenceSchema"));
const ErrorHandler_1 = __importDefault(require("../../utils/ErrorHandler"));
class OccurrenceController {
    constructor(service) {
        this.service = service;
    }
    createCon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body, params: { timeline_id } } = req;
            const payload = Object.assign(Object.assign({}, body), { timelineId: timeline_id });
            try {
                yield OccurrenceSchema_1.default.create().validate(payload);
            }
            catch (error) {
                return res.status(400).json({ errors: error.errors });
            }
            const result = yield this.service.createSer(payload);
            if ('error' in result) {
                return res.status(result.statusCode).json(result);
            }
            return res.status(result.statusCode).send(result);
        });
    }
    getFromParentCon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { query: { page = 1, limit = 10 }, params: { timeline_id } } = req;
            const result = yield this.service.getFromParentSer(timeline_id, Number(page), Number(limit));
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
            const { params: { occurrence_id } } = req;
            const result = yield this.service.getOneSer(occurrence_id);
            if ("error" in result) {
                return res.status(result.statusCode).json(result);
            }
            return res.status(result.statusCode).json(result);
        });
    }
    updateCon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body, params: { occurrence_id } } = req;
            const id = occurrence_id;
            const payload = { id, body };
            try {
                yield OccurrenceSchema_1.default.update().validate(payload);
            }
            catch (error) {
                return res.status(400).json((0, ErrorHandler_1.default)("The id/body is invalid", 400));
            }
            const result = yield this.service.updateSer(occurrence_id, body);
            if ('error' in result) {
                return res.status(400).json((0, ErrorHandler_1.default)("The update request has failed.", 400, "result updateCon"));
            }
            return res.status(result.statusCode).json(result);
        });
    }
    deleteCon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { occurrence_id } = req.params;
            const id = occurrence_id;
            try {
                yield OccurrenceSchema_1.default.delete().validate({ id });
            }
            catch (error) {
                return res.status(400).json((0, ErrorHandler_1.default)("The id is invalid", 400));
            }
            const result = yield this.service.deleteSer(occurrence_id);
            return res.status(result.statusCode).json(result);
        });
    }
}
exports.default = OccurrenceController;
