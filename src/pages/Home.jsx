import ArrowRightL from "../Components/Icons/ArrowRightL";
import CheckmarkStarburst from "../Components/Icons/CheckmarkStarburst";

import PizzaImage from "../assets/images/pizza2.png";
import CookingImage from "../assets/images/cooking1.png";
import OrderFood from "../assets/images/OrderFood.png";
import Enjoy from "../assets/images/enjoy.png";
import PickUp from "../assets/images/pickup.png";
import Layouts from "../Layouts/Layouts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { product } from "../Redux/Slices/productSlice";
import { useNavigate } from "react-router-dom";

function Home() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const productsData = useSelector(state => state.product.productsData);
    const {isLoggedIn} = useSelector(state=>state.auth);

    useEffect(() => {
        // This will be called when the components mount
        dispatch(product());
    }, []);

    function handleNavigation (productId) {
        if (isLoggedIn) {
            navigate(`/product/${productId}`);
        } else {
            navigate("/auth/login"); // Redirect to login if not authenticated
        }
    }

    return (
        <Layouts>
            <div>
                {/* Hero Section */}
                <section
                    className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 bg-gradient-to-r from-amber-50 to-orange-300"
                >
                    <div
                        className="w-4/6 ml-4 text-center md:w-2/6 md:text-left"
                    >
                        <div className="flex justify-center text-4xl md:justify-normal">

                            <h1 className="pb-5 font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text">
                                Enjoy the Slice <span className="text-black">😋</span>
                            </h1>
                        </div>
                        <p className="pb-4 text-[#6B7280]">
                            The Pizza App lets you order your favorite pizza from the comfort of your home.
                            Enjoy the best pizza in town with just a few clicks.
                        </p>
                        <button
                            className="flex items-center px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 group"
                        >
                            Order Now
                            <span className="inline-block ml-3 transition-transform ease-in-out group-hover:translate-x-2">
                                <ArrowRightL />
                            </span>
                        </button>
                    </div>
                    <div>
                        <img
                            src={PizzaImage}
                            alt="pizzaImage"
                            width={550}
                            height={550}
                        />
                    </div>
                </section>

                {/* Services Section */}
                <section
                    className="py-4 mt-6 bg-gradient-to-r from-amber-50 to-orange-300"
                >
                    <div className="container flex flex-col md:flex-row">
                        <div className="flex flex-col items-center justify-center rounded-lg lg:w-1/2">
                            <img
                                src={CookingImage}
                                width={500}
                                className="rounded-lg"
                                alt="Cooking"
                            />
                        </div>

                        <div className="flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">

                            <div className="flex flex-col items-center lg:items-start">
                                <div>
                                    <h2 className="mt-5 mb-5 text-5xl font-extrabold text-transparent title-font bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text">
                                        Cooked by the best <br /> chefs in the world
                                    </h2>
                                    <p className="pb-3 text-base leading-relaxed text-[#6B7280]">
                                        There are many benefits regarding to that but the main ones are:
                                    </p>
                                </div>
                            </div>

                            <div className="w-full p-1">
                                <div className="flex items-center h-full p-2 text-2xl rounded">
                                    <CheckmarkStarburst className="text-[#F38339] w-10 h-10 mr-4" />
                                    <span className="font-bold title-font">Perfect taste</span>
                                </div>
                            </div>
                            <div className="w-full p-1">
                                <div className="flex items-center h-full p-2 text-2xl rounded">
                                    <CheckmarkStarburst className="text-[#F38339] w-10 h-10 mr-4" />
                                    <span className="font-bold title-font">Prepared quickly</span>
                                </div>
                            </div>
                            <div className="w-full p-1">
                                <div className="flex items-center h-full p-2 text-2xl rounded">
                                    <CheckmarkStarburst className="text-[#F38339] w-10 h-10 mr-4" />
                                    <span className="font-bold title-font">Food hygeine guaranteed</span>
                                </div>
                            </div>

                            <div className="pr-10 py-4 mx-auto">

                                <div className="flex justify-center py-4">
                                    <div className="inline-flex w-16 h-1 bg-yellow-500 rounded-full"></div>
                                </div>

                                <div className="flex flex-wrap space-y-6 md:space-y-0">

                                    <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                                        <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                            <img src={OrderFood} />
                                        </div>
                                        <div className="flex-grow">
                                            <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                                                Order Food
                                            </h2>
                                            <p className="text-base leading-relaxed">
                                                As easy as 1, 2, 3. Just select your favorite pizza and place your order.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                                        <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                            <img src={PickUp} />
                                        </div>
                                        <div className="flex-grow">
                                            <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                                                Pickup Food
                                            </h2>
                                            <p className="text-base leading-relaxed">
                                                Pick up your order from the nearest store or get it delivered to your doorstep.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                                        <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                            <img src={Enjoy} />
                                        </div>
                                        <div className="flex-grow">
                                            <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                                                Enjoy Food
                                            </h2>
                                            <p className="text-base leading-relaxed">
                                                As soon as you get your order, enjoy the delicious pizza with your loved ones.
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>

                {/* Product Section */}
                <div className="mx-auto">
                    <div className="flex flex-wrap justify-center">
                        {productsData.map((item) => {
                            return (
                                item.inStock && (
                                    <div className="p-4 md:w-1/3" key={item._id}>
                                            <div 
                                                className="overflow-hidden border rounded-lg border-opacity-60 hover: cursor-pointer"
                                                onClick={()=>handleNavigation(item._id)}
                                            >
                                                <img
                                                    src={item.productImage}
                                                    alt="Pizza Image"
                                                    className="object-cover object-center w-full lg:h-48 md:h-36"
                                                />
                                                <div className="p-6 border">
                                                    <h2 className="text-xs font-medium tracking-widest text-gray-400 title-font">
                                                        {item.category}
                                                    </h2>
                                                    <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                                                        {item.productName}
                                                    </h1>
                                                    <p className="mb-4 text-base leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                    <p className="text-lg font-medium text-gray-900 title-font">
                                                        ${item.price}
                                                    </p>
                                                </div>
                                            </div>
                                    </div>
                                )
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layouts>
    )
}

export default Home;