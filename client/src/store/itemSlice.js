import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: "items",
    initialState: {
        items: null,
    },
    reducers: {
        addItems: (state, action) => {
            state.items = action.payload;
        },
    }
})

export const { addItems } = itemSlice.actions;
export default itemSlice.reducer;