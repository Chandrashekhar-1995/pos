import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema({
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
    subCategory: {
        type: Schema.Types.ObjectId,
        ref: "SubCategory"
    },
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true, 
        index: true
    },
    purchasePrice: {
        type: Number,
        required:true
    },
    salePrice: {
        type: Number,
        required:true
    },
    minSalePrice: {
        type: Number,
    },
    mrp: {
        type: Number,
    },
    unit: {
        type: String,
    },
    stock: {
        type: Number,
    },
    isSaleDiscount: {
        type: Boolean,
    },
    saleDiscountStart: {
        type: Date,
    },
    saleDiscountPercentage: {
        type: Number,
    },
    saleDiscountEnd: {
        type: Date,
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