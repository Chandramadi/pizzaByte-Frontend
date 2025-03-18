import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function RequireAuth() {
    
    const { isLoggedIn, role } = useSelector(state=>state.auth);
    
    if(!isLoggedIn) {
        <Navigate to={'/auth/login'}/>
    }

    if(!role) {
        <Navigate to={'/'}/>
    }

    return <Outlet/>;
}

export default RequireAuth;