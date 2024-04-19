import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
    reducer: {
        items: itemsReducer,
        cart: cartReducer,
    }
})

export default store;