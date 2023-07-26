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
class PatientRepository {
    constructor(model) {
        this.model = model;
    }
    createRep(patient) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.create(patient);
        });
    }
    getFromParentRep(userId, skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.find({ userId }).skip(skip).limit(limit).populate("timelines");
            const totalLength = yield this.model.find({ userId });
            const totalItems = totalLength.length;
            return { totalItems, result };
        });
    }
    getAllRep(skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const totalItems = yield this.model.countDocuments();
            const result = yield this.model.find({}, null, { new: true }).skip(skip).limit(limit); //.populate("timelines")
            return { totalItems, result };
        });
    }
    getOneRep(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findById(id).populate("userId").populate('timelines');
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
    pushTimeline(patientId, timelineId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findByIdAndUpdate(patientId, {
                $push: { timelines: [timelineId] }
            }, { new: true });
        });
    }
}
exports.default = PatientRepository;
