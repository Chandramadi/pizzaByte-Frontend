import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
    role: localStorage.getItem('role') || '',
    data: JSON.parse(localStorage.getItem('data')) || {},
};

export const creatAccount = createAsyncThunk("/auth/createAccount", async(data)=>{
    // data = the data received after submitting the form
    try{
        // /user is the route defined you have defined in your backend
        // https://pizzabyte-backend.onrender.com/user is the complete url for creating a new user.
        const response = axiosInstance.post("/user", data);
        // promise based toast
        toast.promise(response, {
            success: (resolvedPromise)=>{ // the response that the backend api sends
                return resolvedPromise?.data?.message || "Account created successfully!";
            },
            error:"Ohh No!, Something went wrong",
            loading: "Hold back tight, we are registering your id..."
        })
        const apiResponse = await response;
        return apiResponse; // the response that the backend api sends
    }
    catch(error){
        throw error;
    }
})

export const loginAccount = createAsyncThunk("/auth/login", async(data)=>{
    try {
        const response = axiosInstance.post("/auth/login", data);
        toast.promise(response, {
            success : (resolvedPromise)=>{
                return resolvedPromise?.data?.message || "Log In successful"
            },
            error : "Ohh No!, Something went wrong",
            loading: "Hold back tight, we are logging you in..."
        })
        const apiResponse = await response;
        return apiResponse;
    }
    catch(error) {
        console.log("login error",error);
        throw error;
    }
})

export const logoutAccount = createAsyncThunk("/auth/logout", async()=>{
    try {
        const response = axiosInstance.post("/auth/logout");
        toast.promise(response, {
            success : (resolvedPromise)=>{
                return resolvedPromise?.data?.message || "Log out successful";
            },
            error : "Ohh No!, Something went wrong",
            loading: "logging Out...",
        })
        const apiResponse = await response;
        return apiResponse;
    }
    catch(error) {
        throw error;
    }
})

// this thunk syncs cookies with localStorage isLoggedIn
export const isLoggedInCheck = createAsyncThunk("/auth/loginCheck", async()=>{
    try {
        const response = await axiosInstance.get("/auth/isLoggedIn");
        return response;
    }
    catch(error) {
        return error;
    }
})

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers : (builder)=>{
        builder
        .addCase(loginAccount.fulfilled, (state, action)=>{
            // reducer which will execute when the login thunk is fulfilled
            state.isLoggedIn = true
            state.role = action?.payload?.data?.data?.userRole
            state.data = action?.payload?.data?.data?.userData
            
            // the state is stored in ram, hence the data will be
            // erased once the user has closed the brower
            // so, store the data in the localStorage.
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", action?.payload?.data?.data?.userRole);
            localStorage.setItem("data", JSON.stringify(action?.payload?.data?.data?.userData));
        })
        .addCase(logoutAccount.fulfilled, (state,action)=>{
            state.isLoggedIn = false;
            state.role = ''
            state.data = {}
            
            localStorage.setItem("isLoggedIn", false);
            localStorage.setItem("role", '');
            localStorage.setItem("data", JSON.stringify({}));
        })
    }
});

export default AuthSlice.reducer;