import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import FaceBook from "../../components/svgs/FaceBook";
import InstaGram from "../../components/svgs/InstaGram";
import Twitter from "../../components/svgs/Twitter";
import Layouts from "../../layouts/Layouts";
import { addProductToCart, getCartDetails, removeProductFromCart } from "../../redux/slices/cartSlice";
import { productDetailsById } from "../../redux/slices/productSlice";

function ProductDetals() {

    const { productId } = useParams();
    const dispatch = useDispatch();
    const [productDetails, setProductDetails] = useState({});
    const [isInCart, setIsInCart] = useState(false); // Check if product is in cart

    async function getProductDetailsById() {
        const details = await dispatch(productDetailsById(productId));
        setProductDetails(details?.payload?.data?.data);
    }

    async function checkIfInCart() {
        const receivedCartDetails = await dispatch(getCartDetails());
        const cartItems = receivedCartDetails?.payload?.data?.data?.items || [];
        setIsInCart(cartItems.some(item => item.product._id === productId));
    }

    async function handleCart() {
        const cartDetails = await dispatch(addProductToCart(productId));
        if(cartDetails?.payload?.data?.success) {
            checkIfInCart(); // Re-check the cart after adding
        }
    }

    async function handleRemove() {
        // Remove product from cart
        const response = await dispatch(removeProductFromCart(productId));
        if(response?.payload?.data?.success) {
            checkIfInCart(); // Re-check the cart after adding
        }
    }

    useEffect(() => {
        getProductDetailsById();
        checkIfInCart(); // Check if the product is in the cart after every load
    }, [productId]);

    return (
        <Layouts>
            <section className="overflow-hidden text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap mx-auto lg:w-4/5">
                        <img
                            alt="ecommerce"
                            className="object-cover object-center w-full h-64 rounded lg:w-1/2 lg:h-auto"
                            src={productDetails?.productImage}
                        />
                        <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-20 xl:py-28 lg:mt-0">
                            <h2 className="text-sm tracking-widest text-gray-500 title-font">
                                {productDetails?.category}
                            </h2>
                            <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
                                {productDetails?.productName}
                            </h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg
                                        fill="#FF9110"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-4 h-4 "
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="#FF9110"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-4 h-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="#FF9110"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-4 h-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="#"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-4 h-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="#"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-4 h-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="ml-3 text-gray-600">4 Reviews</span>
                                </span>
                                <span className="flex py-2 pl-3 ml-3 border-l-2 border-gray-200 space-x-2">
                                    <Link className="text-[#FF9110] hover:text-[#ff8f1077] hover:cursor-pointer">
                                        <FaceBook/>
                                    </Link>
                                    <Link className="text-[#FF9110] hover:text-[#ff8f1077] hover:cursor-pointer">
                                        <Twitter/>
                                    </Link>
                                    <Link className="text-[#FF9110] hover:text-[#ff8f1077] hover:cursor-pointer">
                                        <InstaGram/>
                                    </Link>
                                </span>
                            </div>
                            <p className="leading-relaxed">{productDetails?.description}</p>

                            <div className="flex pt-5">
                                <span className="text-2xl font-medium text-gray-900 title-font">
                                    ₹{productDetails?.price}
                                </span>
                                {isInCart ? (
                                    <button
                                        className="flex px-6 py-2 ml-auto text-white bg-yellow-500 border-0 rounded focus:outline-none hover:bg-yellow-600"
                                        onClick={() => handleRemove(productId)}
                                    >
                                        Remove from cart
                                    </button>
                                ) : (
                                    <button
                                        className="flex px-6 py-2 ml-auto text-white bg-yellow-500 border-0 rounded focus:outline-none hover:bg-yellow-600"
                                        onClick={handleCart}
                                    >
                                        Add to Cart
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layouts>
    )
}

export default ProductDetals;