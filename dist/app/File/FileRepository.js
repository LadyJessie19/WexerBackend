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
Object.defineProperty(exports, "__esModule", { value: true });
class FileRepository {
    constructor(model) {
        this.model = model;
    }
    createRep(file) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.create(file);
        });
    }
    getFromParentRep(occurrenceId, skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.find({ occurrenceId }).skip(skip).limit(limit).populate("occurrenceId");
            const totalItems = (yield this.model.find({ occurrenceId })).length;
            return { totalItems, result };
        });
    }
    getAllRep(skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.find({}, null, { new: true }).skip(skip).limit(limit); //.populate('occurrenceId')
            const totalItems = yield this.model.countDocuments();
            return { totalItems, result };
        });
    }
    getOneRep(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findById(id).populate('occurrenceId');
        });
    }
    deleteRep(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findByIdAndDelete(id);
        });
    }
}
exports.default = FileRepository;
