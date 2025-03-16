import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "../Redux/Slices/AuthSlice";
import productSliceReducer from "../Redux/Slices/ProductSlice";
import cartSliceReducer from "../Redux/Slices/CartSlice";

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