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
class UserRepository {
    constructor(model) {
        this.model = model;
    }
    createRep(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.create(user);
        });
    }
    getAllRep(skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const totalItems = yield this.model.countDocuments();
            const result = yield this.model.find({}, null, { new: true }).skip(skip).limit(limit); //.populate("patients")
            return { totalItems, result };
        });
    }
    getOneRep(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findById(id).populate('patients');
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
    findByEmailRep(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findOne({ email }).select('+password');
        });
    }
    findByNicknameRep(nickname) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findOne({ nickname });
        });
    }
    pushPatient(userId, patientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findByIdAndUpdate(userId, {
                $push: { patients: [patientId] }
            }, { new: true });
        });
    }
    pullPatient(userId, patientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findByIdAndUpdate(userId, {
                $pull: { patients: patientId }
            }, { new: true });
        });
    }
}
exports.default = UserRepository;
