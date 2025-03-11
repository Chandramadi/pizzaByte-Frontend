import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || 'false',
    role: localStorage.getItem('role') || '',
    data: JSON.parse(localStorage.getItem('data')) || {},
};

export const creatAccount = createAsyncThunk("/auth/createAccount", async(data)=>{
    console.log("authSlice data",data);
    try{
        // /user is the route defined you have defined in your backend
        // https://pizzabyte-backend.onrender.com/user is the complete url for creating a new user.
        const response = await axiosInstance.post("/user", data);
        console.log(response);
        return response.data; 
    }
    catch(error){
        console.log(error);
    }
})

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
});

export default AuthSlice.reducer;