import { useState } from "react";
import SignUpPresentation from "./SignUpPresentation";

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
        console.log(SignUpState);
    }
    
    return(
        <SignUpPresentation
            handleUserInput ={handleUserInput}
            handleFormSubmit = {handleFormSubmit}
        />
    )
}

export default SignUp;