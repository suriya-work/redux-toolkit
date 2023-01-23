import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null,
}
export const cartsFetch = createAsyncThunk(
    "carts/cartsFetch",
    async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com")
            return response.data
        } catch (error) {
            console.log(error)
        }

    }
)

const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {},
    extraReducers: {
        [cartsFetch.pending]: (state, action) => {
            state.status = "pending";
        },
        [cartsFetch.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = "success"
        },
        [cartsFetch.rejected]: (state, action) => {
            state.status = "rejected"
        },
    }
})

export default cartSlice.reducer;
