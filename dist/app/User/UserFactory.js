"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserFactory {
    static newUser(body) {
        return {
            name: body.name,
            email: body.email,
            password: body.password
        };
    }
}
exports.default = UserFactory;
