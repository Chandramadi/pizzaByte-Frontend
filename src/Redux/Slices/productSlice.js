import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    productsData : [], // array of products
}

export const product = createAsyncThunk("/products/getAll", async()=>{
    try{
        const response = axiosInstance("/products");
        toast.promise(response, {
            success :  "Products loaded successfully",
            error : "Something went wrong, cannot load products",
            loading : "Loading all the products",
        })
        const apiResponse = await response;
        return apiResponse;
    }
    catch(error) {
        throw error;
    }
})

const productSlice = createSlice({
    name : "product",
    initialState,
    reducers:{},
    extraReducers : (builder)=>{
        builder.addCase(product.fulfilled, (state, action)=>{
            state.productsData = action?.payload?.data?.data;
        })
    }
})

export default productSlice.reducer;