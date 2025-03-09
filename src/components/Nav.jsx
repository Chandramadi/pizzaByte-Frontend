import { Link, useLocation } from "react-router-dom";
import PizzaLogo from "../assets/images/pizza1.png";

function Nav() {

    const location = useLocation();

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

                </ul>
            </div>

        </nav>
    )
}

export default Nav;