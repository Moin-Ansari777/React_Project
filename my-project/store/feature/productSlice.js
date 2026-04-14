import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { useState } from 'react'

const initialState = {
    item: [],
    loading: false,
    error: null,
    cart: [],
}
const userData = {
    name: "Orhan",
    username: "Orhan777",
    phone: "+91 8535013309",
    email: "okorhan786@gmail.com",
    address: "MuzaffarNagar City, Uttar Pradesh, 251001"
};
// src/store/feature/productSlice.js
const fetchData = createAsyncThunk('product/fetchData', async () => {
    // 1. Use https://
    // 2. Add / at the end if the first fix alone doesn't work
    const response = await axios.get('https://fakestoreapi.com/products')
    console.log(response)

    return await response.data;
});


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

        // synchronuosTask
        addToCart: (state, action) => {

            const { item, itemId } = action.payload
            const existingItem = state.cart.find(item => item.id === itemId)

            if (existingItem) {
                existingItem.quantity += 1;
            }
            else {
                state.cart.push({ ...item, quantity: 1 })
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },
        emptyCart: (state, action) => {
            state.cart = [];
        }
    },

    // AsynchronusTask
    extraReducers: (addBuilder) => {
        addBuilder.addCase(fetchData.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        addBuilder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.item = action.payload;
        })
        addBuilder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action;
        })
    }

}
)

export { fetchData, userData }
export const { addToCart, removeFromCart, emptyCart } = productSlice.actions;
export default productSlice.reducer;