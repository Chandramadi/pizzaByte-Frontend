import { useState } from "react";
import SignUpPresentation from "./SignUpPresentation";
import toast from "react-hot-toast";
import { creatAccount } from "../../Redux/Slices/authSlice";
import { useDispatch } from "react-redux";

function SignUp() {

    const dispatch = useDispatch();

    const [SignUpState, setSignUpState] = useState({
        firstName : "",
        email : "",
        mobileNumber : "",
        password : ""
    })

    function handleUserInput(event) {
        const {name, value} = event.target;
        setSignUpState((state)=>({
            ...state,
            [name] : value,
        }))
    }

    async function handleFormSubmit(event) {
        event.preventDefault(); // prevent the form from reloading the page

        if(!SignUpState.firstName || !SignUpState.email || !SignUpState.phoneNumber || !SignUpState.password) {
            toast.error("Missing values from the form")
        }
        else {
            toast.success("Account Created Successfully!")
        }

        // Storing the user data in the database
        const apiResponse = await dispatch(creatAccount(SignUpState));
        console.log(apiResponse);
    }
    
    return(
        <SignUpPresentation
            handleUserInput ={handleUserInput}
            handleFormSubmit = {handleFormSubmit}
        />
    )
}

export default SignUp;