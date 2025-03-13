import { useState } from "react";
import LoginPresentaion from "./LoginPresentation";
import { loginAccount } from "../../Redux/Slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loginState, setLoginState] = useState({
        email : '',
        password : ''
    })

    function handleUserInput(event) {
        const {name, value} = event.target;
        setLoginState((state)=>({
            ...state,
            [name] : value,
        }))
    }

    async function handleFormSubmit(event) {
        event.preventDefault(); // prevent the form from reloading the page

        if(!loginState.email || !loginState.password) {
            toast.error("Missing values from the form")
        }

        if(loginState.password.length<8) {
            toast.error("password should 8 characters long")
        }
        else {
            const thunkResponse = await dispatch(loginAccount(loginState));
            // tunkResponse.payload.data contains the data that the backend api sends
            if(thunkResponse.payload.data.success) {
                navigate(-1);
            }
        }
        
    }

    return(
        <LoginPresentaion
            handleUserInput = {handleUserInput}
            handleFormSubmit = {handleFormSubmit}
        />
    )
}

export default Login;