import { Item } from "../models/item.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";


const getItemController = asyncHandler(async (req, res) => {
    try {
        const items = await Item.find()
        res.status(200).send(items)
    } catch (error) {
        throw new ApiError(500, "Something went wrong while fetching items.")
    }
});

export { getItemController };