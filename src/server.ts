import express from "express";
import dotenv from 'dotenv';
// import { TestingRoutes } from "./routes/TestingRoutes";
import db from "./configs/databaseConfig";
import MainRouter from "./routes/MainRouter";
dotenv.config()

const app = express();
const port = process.env.PORT;

app.use(express.json());
// app.use(TestingRoutes)
app.use(MainRouter)

;(async () => {
    return await db()
})()

app.listen(port, () => {
    console.log(`Server started! Listening port: ${port}`);
});