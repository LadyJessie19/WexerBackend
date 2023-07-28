"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserFactory {
    static newUser(body) {
        return {
            name: body.name,
            nickname: body.nickname,
            email: body.email,
            password: body.password
        };
    }
}
exports.default = UserFactory;
