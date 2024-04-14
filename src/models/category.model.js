import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    ietmCode: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true, 
        index: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
});

export const Category = mongoose.model("Category", categorySchema)