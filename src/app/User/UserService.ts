import UserRepository from "./UserRepository"

import { ServiceUserDTO } from "./UserDTO";

import createUser from "./features/createUser.service";
import getAllUsers from "./features/getAllUsers.service";
import getOneUser from "./features/getOneUsers.service";
import updateUser from "./features/updateUser.service";
import deleteUser from "./features/deleteUser.service";
import { ObjectId } from "mongoose";

class UserService{
    constructor(private repository:UserRepository){}//After, add photoRepository

    async createSer(body:ServiceUserDTO){//exchange the DTO to the one with photo
        return await createUser(body, this.repository)
    }

    async getAllSer(page:number, limit:number){
        return await getAllUsers(page, limit, this.repository)
    }

    async getOneSer(id:ObjectId){
        return await getOneUser(id, this.repository)
    }

    async updateSer(id:ObjectId, body:ServiceUserDTO){
        return await updateUser(id, body, this.repository)
    }

    async deleteSer(id:ObjectId){
        return await deleteUser(id, this.repository)
    }
}

export default UserService