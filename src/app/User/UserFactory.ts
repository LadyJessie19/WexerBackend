import { CreateUserDTO } from "./UserDTO"

class UserFactory {
    static newUser(body:CreateUserDTO){
        return {
            name: body.name,
            nickname: body.nickname,
            email: body.email,
            password: body.password
        }
    }
}

export default UserFactory