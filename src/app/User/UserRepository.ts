import User from './UserEntity'

import { CreateUserDTO } from "./UserDTO";

import { ObjectId } from 'mongoose';

class UserRepository {
    constructor(private model: typeof User){}

    async createRep(user:CreateUserDTO){
        return await this.model.create(user);
    }

    async getAllRep(skip:number, limit:number){
        const totalUsers = await this.model.countDocuments();
        const result = await this.model.find().skip(skip).limit(limit)//.populate("patients")
        return { totalUsers, result }
        //don't forget: .populate("photo")
        //how to populate images?
    }

    async getOneRep(id:ObjectId){
        return await this.model.findById(id).populate('patients')
    }

    async updateRep(id:ObjectId, body:CreateUserDTO){
        return await this.model.findByIdAndUpdate(id, { $set: body }, { new: true })
    }

    async deleteRep(id:ObjectId){
        return await this.model.findByIdAndDelete(id)
    }
    
    async findByEmail(email:string){
        return await this.model.findOne({ email })
    }
    
    async pushPatient(userId: ObjectId, patientId: ObjectId){
        return await this.model.findByIdAndUpdate(userId, {
            $push: { patients: [patientId] }
        }, { new: true })
    }
}

export default UserRepository