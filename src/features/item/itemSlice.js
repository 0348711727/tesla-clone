import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: ["Model S", "Model 3", "Model X","Model Y", "Solar Roof", "Solar Panels"]
}

const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {}
})

export const selectItems = state => state.item.items; 

export default itemSlice.reducer;