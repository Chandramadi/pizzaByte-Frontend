import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slices/authSlice";
import cartSliceReducer from "./slices/cartSlice";
import productSliceReducer from "./slices/productSlice";

const store = configureStore({
    reducer:{
        auth:  authSliceReducer,
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