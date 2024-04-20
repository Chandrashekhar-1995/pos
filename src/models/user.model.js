import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true, 
        index: true
    },
    mobile_no: {
        type: Number,
        required: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true, 
        index: true
    },
    description: {
        type: String,
    },
    imageUrl: {
        type: String //cloudenary url
    },

},
    {
    timestamps: true
    }
);

export const Item = mongoose.model("Item", itemSchema)