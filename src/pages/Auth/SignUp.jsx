import { useState } from "react";
import SignUpPresentation from "./SignUpPresentation";
import toast from "react-hot-toast";

function SignUp() {

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

    function handleFormSubmit(event) {
        event.preventDefault(); // prevent the form from reloading the page

        if(!SignUpState.firstName || !SignUpState.email || !SignUpState.mobileNumber || !SignUpState.password) {
            toast.error("Missing values from the form")
        }
        else {
            toast.success("Account Created Successfully!")
        }
    }
    
    return(
        <SignUpPresentation
            handleUserInput ={handleUserInput}
            handleFormSubmit = {handleFormSubmit}
        />
    )
}

export default SignUp;