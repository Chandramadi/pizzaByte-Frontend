import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "../Redux/Slices/authSlice";
import productSliceReducer from "../Redux/Slices/productSlice";

const store = configureStore({
    reducer:{
        auth:  AuthSliceReducer,
        product : productSliceReducer
    },
    devTools: true
})

export default store;