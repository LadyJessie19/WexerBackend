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
const UserSchema_1 = __importDefault(require("./UserSchema"));
const ServerError_1 = __importDefault(require("../../utils/ServerError"));
const ErrorHandler_1 = __importDefault(require("../../utils/ErrorHandler"));
const UserFactory_1 = __importDefault(require("./UserFactory"));
class UserController {
    constructor(service) {
        this.service = service;
    }
    createCon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const payload = UserFactory_1.default.newUser(body);
            try {
                yield UserSchema_1.default.create().validate(payload);
            }
            catch (error) {
                return res.status(400).json((0, ErrorHandler_1.default)(error.message, 400));
            }
            const result = yield this.service.createSer(payload);
            if ("error" in result) {
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
            const { params: { id } } = req;
            const result = yield this.service.getOneSer(id);
            if ("error" in result) {
                return res.status(result.statusCode).json(result);
            }
            return res.status(result.statusCode).json(result);
        });
    }
    updateCon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body, params: { id } } = req;
            const payload = { id, body };
            try {
                yield UserSchema_1.default.update().validate(payload);
            }
            catch (error) {
                return res.status(400).json((0, ErrorHandler_1.default)(error.message, 400));
            }
            const result = yield this.service.updateSer(id, body);
            if ('error' in result) {
                return res.status(400).json((0, ErrorHandler_1.default)("The request failed", 400, "result updateCon"));
            }
            return res.status(result.statusCode).json(result);
        });
    }
    deleteCon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield UserSchema_1.default.delete().validate(req.params);
            }
            catch (error) {
                return res.status(400).json((0, ServerError_1.default)(error));
            }
            const result = yield this.service.deleteSer(id);
            return res.status(result.statusCode).json(result);
        });
    }
}
exports.default = UserController;
