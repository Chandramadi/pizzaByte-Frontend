import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    cartsData: '',
}

export const getCartDetails = createAsyncThunk("cart/getDetails", async () => {
    try {
        const response = axiosInstance.get("/cart");
        toast.promise(response, {
            success: 'Cart fetched successfully',
            error: 'Something went wrong cannot fetch cart',
            loading: 'Fetching cart details',
        })
        const apiResponse = await response;
        return apiResponse;
    }
    catch (error) {
        throw error;
    }
})

export const addProductToCart = createAsyncThunk("cart/addProduct", async (productId) => {
    try {
        const response = axiosInstance.post(`/cart/add/${productId}`);
        toast.promise(response, {
            loading: 'Adding product to cart',
            error: 'Something went wrong cannot add product to cart',
            success: 'Product added successfully',
        })
        const apiResponse = await response;
        return apiResponse;
    }
    catch (error) {
        throw error;
    }
})

export const removeProductFromCart = createAsyncThunk('/cart/removeProduct', async (productId) => {
    try {
        const response = axiosInstance.post(`/cart/remove/${productId}`);
        toast.promise(response, {
            loading: 'Removing product from cart',
            error: 'Something went wrong cannot remove product from cart',
            success: 'Product removed successfully',
        });
        const apiResponse = await response;
        return apiResponse;
    } catch (error) {
        toast.error('Something went wrong');
    }
});

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCartDetails.fulfilled, (state, action) => {
            state.cartsData = action?.payload?.data?.data;
        });
    }
})

export default cartSlice.reducer;