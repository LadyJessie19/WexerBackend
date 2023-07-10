import express from "express";
import mongoose from 'mongoose'
import {Request, Response } from 'express'
import dotenv from 'dotenv';
import db from "./configs/databaseConfig";
dotenv.config()

const app = express();
const port = process.env.PORT;

app.use(express.json());

;(async () => {
    return await db()
})()

const SomethingSchema = new mongoose.Schema({
    name: String,
    age: Number
}, { timestamps: true })

const database = mongoose.model('Doctors', SomethingSchema)

app.get('/doctors', async (req:Request, res:Response) => {
    const doctors = await database.find()
    res.status(200).json({doctors});
})

app.post('/doctors', async (req:Request, res:Response) => {
    const {body} = req
    await database.create(body)
    res.status(201).json({msg: 'created'});
})

app.listen(port, () => {
    console.log(`Server started! Listening port: ${port}`);
});