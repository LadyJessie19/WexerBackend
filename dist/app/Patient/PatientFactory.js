"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PatientFactory {
    static newPatient(body) {
        return {
            name: body.name,
            birthdate: body.birthdate,
            contact: body.contact,
            demands: body.demands,
            personalAnnotations: body.personalAnnotations
        };
    }
}
exports.default = PatientFactory;
