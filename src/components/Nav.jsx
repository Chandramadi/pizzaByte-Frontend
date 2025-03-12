import { Link } from "react-router-dom";
import PizzaLogo from "../assets/images/pizza1.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutAccount } from "../Redux/Slices/authSlice";

function Nav() {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    async function handleLogOut(event) {
        event.preventDefault();
        const thunkResponse = await dispatch(logoutAccount());
        if(thunkResponse.payload.data.success) {
            navigate("/");
        }
    }

    return (
        <nav className="flex items-center justify-around h-20 text-[#6B7280] font-mono border-none shadow-md">

            <div className="flex items-center justify-center">
                <Link to={"/"}><p>Pizza App</p></Link>
                <img src={PizzaLogo} alt="Pizza logo" />
            </div>

            <div className='hidden md:block'>
                <ul className='flex gap-4'>

                    <li className='hover:text-[#FF9110] cursor-pointer'>
                        {' '}
                        <p>Menu {' '}</p>
                    </li>

                    <li className='hover:text-[#FF9110] cursor-pointer'>
                        {' '}
                        <p>Services {' '}</p>
                    </li>

                    <li className='hover:text-[#FF9110] cursor-pointer'>
                        {' '}
                        <p>About {' '}</p>
                    </li>

                    {
                        isLoggedIn ?
                            <li className='hover:text-[#FF9110] cursor-pointer'>
                                {' '}
                                <Link onClick={handleLogOut}>Log Out {' '}</Link>
                            </li>
                            :
                            <li className='hover:text-[#FF9110] cursor-pointer'>
                                {' '}
                                <Link to={"/auth/login"}>Log In{' '}</Link>
                            </li>
                    }

                </ul>
            </div>

        </nav>
    )
}

export default Nav;