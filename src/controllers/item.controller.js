import { Item } from "../models/item.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";



// Add items
const addItemController = asyncHandler(async (req, res) => {
    try {
        const newItem = new Item(req.body)
        await newItem.save()
        res.status(201).send("Item added successfully")
    } catch (error) {
        console.log("Something went wrong while adding items.", error);
    }
});


//Get items
const getItemController = asyncHandler(async (req, res) => {
    try {
        const items = await Item.find()
        res.status(200).send(items)
    } catch (error) {
        throw new ApiError(500, "Something went wrong while fetching items.")
    }
});

export {
    getItemController,
    addItemController
};