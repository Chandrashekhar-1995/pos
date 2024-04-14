import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js"


// dotenv config
dotenv.config()

//connect db
connectDB()

//rest object
const app = express();


//middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));


//routes import 
import itemRouter from "./routes/item.routes.js"

//routes declaration
app.use("/api/v1/items", itemRouter)

// port
const PORT = process.env.PORT || 8080

//listen
app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})