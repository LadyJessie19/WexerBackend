import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

const url = process.env.URL

async function db() {
mongoose.connection
.once("open", () => {
    console.log("Connected successfully to MongoDB")
})
    await mongoose.connect(url as string)
}

export default db