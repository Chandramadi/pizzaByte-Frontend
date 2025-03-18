import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    productsData : [], // array of products
}

export const addProduct = createAsyncThunk("/products", async (data) => {
    try {
        const responsePromise = axiosInstance.post("/products", data, {
            headers: { // to handle image upload
                "Content-Type": "multipart/form-data",
            },
        });

        toast.promise(responsePromise, {
            success: "Product added successfully",
            error: "Something went wrong, cannot add product",
            loading: "Adding the product...",
        });

        const apiResponse = await responsePromise;
        console.log("product slice", apiResponse);
        return apiResponse;
    } catch (error) {
        throw error;
    }
});

export const product = createAsyncThunk("/products/getAll", async()=>{
    try{
        const response = axiosInstance.get("/products");
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

export const productDetailsById = createAsyncThunk("/products/byId", async(productId)=>{
    try{
        const response = axiosInstance.get(`/products/${productId}`);
        toast.promise(response, {
            success :  "Product loaded successfully",
            error : "Something went wrong, cannot load products",
            loading : "Loading the product",
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