import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemSlice";

const store = configureStore({
    reducer: {
        item:itemsReducer,
    }
})

export default store;