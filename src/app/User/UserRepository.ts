import User from './UserEntity'

import { CreateUserDTO } from "./UserDTO";

import { ObjectId } from 'mongoose';

class UserRepository {
    constructor(private model: typeof User){}

    async createRep(user:CreateUserDTO){
        return await this.model.create(user);
    }

    async getAllRep(skip:number, limit:number){
        const totalItems = await this.model.countDocuments();
        const result = await this.model.find({}, null, { new: true }).skip(skip).limit(limit)//.populate("patients")
        return { totalItems, result }
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
    
    async findByEmailRep(email:string){
        return await this.model.findOne({ email }).select('+password')
    }

    async findByNicknameRep(nickname:string){
        return await this.model.findOne({ nickname })
    }
    
    async pushPatient(userId: ObjectId, patientId: ObjectId){
        return await this.model.findByIdAndUpdate(userId, {
            $push: { patients: [patientId] }
        }, { new: true })
    }

    async pullPatient(userId: ObjectId, patientId: ObjectId){
        return await this.model.findByIdAndUpdate(userId, {
            $pull: { patients: patientId }
        }, { new: true })
    }
}

export default UserRepository