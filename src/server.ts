import express from "express";
import dotenv from 'dotenv';
import { TestingRoutes } from "./routes/TestingRoutes";
import db from "./configs/databaseConfig";
dotenv.config()

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(TestingRoutes)

;(async () => {
    return await db()
})()

app.listen(port, () => {
    console.log(`Server started! Listening port: ${port}`);
});