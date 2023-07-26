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
class OccurrenceRepository {
    constructor(model) {
        this.model = model;
    }
    createRep(occurrence) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.create(occurrence);
        });
    }
    getFromParentRep(timelineId, skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.find({ timelineId }).skip(skip).limit(limit).populate("files").populate("timelineId");
            const totalItems = (yield this.model.find({ timelineId })).length;
            return { totalItems, result };
        });
    }
    getAllRep(skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.find({}, null, { new: true }).skip(skip).limit(limit); //.populate("files")
            const totalItems = yield this.model.countDocuments();
            return { totalItems, result };
        });
    }
    getOneRep(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findById(id).populate("timelineId").populate('files');
        });
    }
    updateRep(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findByIdAndUpdate(id, { $set: body }, { new: true });
        });
    }
    deleteRep(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findByIdAndDelete(id);
        });
    }
    pushFile(occurrenceId, fileId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findByIdAndUpdate(occurrenceId, {
                $push: { files: [fileId] }
            }, { new: true });
        });
    }
}
exports.default = OccurrenceRepository;
