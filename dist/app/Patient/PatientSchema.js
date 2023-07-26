"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const yup = __importStar(require("yup"));
const mongoose_1 = require("mongoose");
const dateNow = Date.now();
class PatientYupSchema {
    static create() {
        return yup.object().shape({
            name: yup.string().required(),
            birthdate: yup.date().default(dateNow),
            contact: yup.string().required(),
            demands: yup.string().required(),
            personalAnnotations: yup.string().required()
        });
    }
    static update() {
        return yup.object().shape({
            id: yup
                .mixed()
                .test('is-valid-objectId', 'The ID is not valid', value => mongoose_1.Types.ObjectId.isValid(value)),
            body: yup.object().required("The body is empty")
        });
    }
    static delete() {
        return yup.object().shape({
            id: yup
                .mixed()
                .test('is-valid-objectId', 'The ID is not valid', value => mongoose_1.Types.ObjectId.isValid(value))
        });
    }
}
exports.default = PatientYupSchema;
