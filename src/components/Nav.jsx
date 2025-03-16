import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAccount } from "../Redux/Slices/AuthSlice";
import PizzaLogo from "../assets/images/pizza1.png";
import CartIcon from "../assets/svg/cart.svg";
import { useEffect } from "react";
import { getCartDetails } from "../Redux/Slices/CartSlice";

function Nav() {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const { cartsData } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleLogOut(event) {
        event.preventDefault();
        const thunkResponse = await dispatch(logoutAccount());
        console.log(thunkResponse);
        if (thunkResponse.payload.data.success) {
            navigate("/");
        }
    }

    useEffect(() => {
        dispatch(getCartDetails());
    }, []);

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
                            (<li className='hover:text-[#FF9110] cursor-pointer'>
                                {' '}
                                <Link onClick={handleLogOut}>Log Out {' '}</Link>
                            </li>)
                            :
                            (<li className='hover:text-[#FF9110] cursor-pointer'>
                                {' '}
                                <Link to={"/auth/login"}>Log In{' '}</Link>
                            </li>)
                    }

                    {
                        isLoggedIn && (
                            <Link to={'/cart'}>
                                <li>
                                    <img src={CartIcon} className='w-8 h-8 inline' />
                                    {' '}
                                    {
                                        cartsData?.items && cartsData?.items?.length > 0 && // do not display zero
                                        (
                                            <p className='text-black inline'>{cartsData?.items?.length}</p>
                                        )
                                    }

                                </li>
                            </Link>
                        )}

                </ul>
            </div>

        </nav>
    )
}

export default Nav;