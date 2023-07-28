import User from "./UserEntity";
import UserRepository from "./UserRepository";
import UserService from "./UserService";
import UserController from "./UserController";

class UserModule{
    static build(){
        const repository = new UserRepository(User)
        const service = new UserService(repository)
        const controller = new UserController(service)
        return { repository, service, controller }
    }
}

export default UserModule