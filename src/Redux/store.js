import { configureStore, createSlice } from "@reduxjs/toolkit";
import AuthSliceReducer from "../Redux/Slices/authSlice";
import productSliceReducer from "../Redux/Slices/productSlice";
import cartSliceReducer from "../Redux/Slices/cartSlice";

const store = configureStore({
    reducer:{
        auth:  AuthSliceReducer,
        product : productSliceReducer,
        cart : cartSliceReducer,
    },
    devTools: true,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})

export default store;