import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import { Item } from "./models/item.model.js";
import items from "./utils/data.js"


dotenv.config();
connectDB();

// function seeder
const importData = async () => {
    try {
        // await Item.deleteMany()
        // const itemsData = await Item.insertMany(items)
        await 
        console.log("Loading successfully");
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

importData()