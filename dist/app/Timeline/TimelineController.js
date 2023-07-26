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
const TimelineSchema_1 = __importDefault(require("./TimelineSchema"));
const ErrorHandler_1 = __importDefault(require("../../utils/ErrorHandler"));
class TimelineController {
    constructor(service) {
        this.service = service;
    }
    createCon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body, params: { patient_id } } = req;
            const payload = Object.assign(Object.assign({}, body), { patientId: patient_id });
            try {
                yield TimelineSchema_1.default.create().validate(payload);
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
            const { query: { page = 1, limit = 10 }, params: { patient_id } } = req;
            const result = yield this.service.getFromParentSer(patient_id, Number(page), Number(limit));
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
            const { params: { timeline_id } } = req;
            const result = yield this.service.getOneSer(timeline_id);
            if ("error" in result) {
                return res.status(result.statusCode).json(result);
            }
            return res.status(result.statusCode).json(result);
        });
    }
    updateCon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body, params: { timeline_id } } = req;
            const id = timeline_id;
            const payload = { id, body };
            try {
                yield TimelineSchema_1.default.update().validate(payload);
            }
            catch (error) {
                return res.status(400).json((0, ErrorHandler_1.default)("The id/body is invalid", 400));
            }
            const result = yield this.service.updateSer(timeline_id, body);
            if ('error' in result) {
                return res.status(400).json((0, ErrorHandler_1.default)("The update request has failed.", 400, "result updateCon"));
            }
            return res.status(result.statusCode).json(result);
        });
    }
    deleteCon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { timeline_id } = req.params;
            const id = timeline_id;
            try {
                yield TimelineSchema_1.default.delete().validate({ id });
            }
            catch (error) {
                return res.status(400).json((0, ErrorHandler_1.default)("The id/body is invalid", 400));
            }
            const result = yield this.service.deleteSer(timeline_id);
            return res.status(result.statusCode).json(result);
        });
    }
}
exports.default = TimelineController;
