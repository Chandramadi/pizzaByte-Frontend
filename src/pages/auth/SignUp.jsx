import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { creatAccount } from "../../redux/slices/authSlice";
import SignUpPresentation from "./SignUpPresentation";

function SignUp() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [SignUpState, setSignUpState] = useState({
        firstName : "",
        email : "",
        mobileNumber : "",
        password : "",
        role : "USER",
    })

    function handleUserInput(event) {
        const { name, value } = event.target;
        let processedValue = value;
    
        if (value.toLowerCase() === 'admin') {
            processedValue = value.toUpperCase();
        }
    
        setSignUpState((state) => ({
            ...state,
            [name]: processedValue,
        }));
    }

    async function handleFormSubmit(event) {
        event.preventDefault(); // prevent the form from reloading the page

        if(!SignUpState.firstName || !SignUpState.lastName || !SignUpState.email || !SignUpState.phoneNumber || !SignUpState.password) {
            toast.error("Missing values from the form");
        }

        if(SignUpState.firstName.length<4) {
            toast.error("First Name must be atleast 4 character long");
        }
        if(SignUpState.lastName && SignUpState.lastName.length<4) {
            toast.error("Last Name must be atleast 4 character long");
        }
        if(SignUpState.phoneNumber.length<10) {
            toast.error("Phone number should be of 10 digits only");
        }
        if(SignUpState.password.length<8) {
            toast.error("password should 8 characters long");
        }
        else{
            // Storing the user data in the database
            const thunkResponse = await dispatch(creatAccount(SignUpState));
            // tunkResponse.payload.data contains the data that the backend api sends
            // and thunkResponse contains the data that the thunk sends
            if(thunkResponse?.payload?.data?.success) {
                navigate(-1);
            }
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