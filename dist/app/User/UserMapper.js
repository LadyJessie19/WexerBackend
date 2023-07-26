"use strict";
//Mais para frente nós iremos fazer esse mapper para retornar no banco de dados os links das imagens enviadas pelos usuários
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
class UserMapper {
    static toClient(user) {
        return {
            "id": user._id,
            "name": user.name,
            "email": user.email,
            "photo": user.photo,
        };
    }
}
exports.UserMapper = UserMapper;
