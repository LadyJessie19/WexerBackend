import express from "express";
import {Request, Response } from 'express'
import mongoose from "mongoose";

const TestingRoutes = express();

const SomethingSchema = new mongoose.Schema({
    name: String,
    age: Number
}, { timestamps: true })

const database = mongoose.model('Doctors', SomethingSchema)

TestingRoutes.get('/doctors', async (req:Request, res:Response) => {
    const doctors = await database.find()
    res.status(200).json({message: "These are the users that were found", doctors});
})

TestingRoutes.post('/doctors', async (req:Request, res:Response) => {
    const {body} = req
    await database.create(body)
    res.status(201).json({msg: 'created'});
})

TestingRoutes.delete('/doctors/:id', async (req:Request, res:Response) => {
    const {params: {id}} = req
    await database.findOneAndDelete(id as any)
    res.status(200).json({msg: 'The user was deleted successfully'});
})

TestingRoutes.put('/doctors/:id', async (req:Request, res:Response) => {
    const {params: {id}, body} = req
    const doctor = await database.findByIdAndUpdate(id, body, { new: true })
    res.status(200).json({ msg: 'Doctor updated successfully', doctor });
})

TestingRoutes.get('/doctors/:id', async (req: Request, res: Response) => {
    const { params: { id } } = req;
    const doctor = await database.findById(id);
    res.status(200).json({ doctor });
});

export { TestingRoutes }