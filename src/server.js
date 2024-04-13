import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/config.js";

// dotenv config
dotenv.config()

//connect db
connectDB()

//rest object
const app = express();


//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));


//routes
app.get('/', (req, res) => {
    req.setd("<h1>POS BACKEND</h1>")
});


// port
const PORT = process.env.PORT || 8080

//listen
app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})