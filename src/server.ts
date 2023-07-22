import express from "express";
import dotenv from 'dotenv';
import db from "./configs/databaseConfig";
import MainRouter from "./routes/MainRouter";
dotenv.config()

import path from "path";
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", 'uploads')))
app.use(express.static('uploads'))

app.use(MainRouter)

;(async () => {
    return await db()
})()

app.listen(port, () => {
    console.log(`Server started! Listening port: ${port}`);
});