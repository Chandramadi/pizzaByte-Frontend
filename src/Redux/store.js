import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "../Redux/Slices/authSlice";

const store = configureStore({
    reducer:{
        auth:  AuthSliceReducer
    },
    devTools: true
})

export default store;