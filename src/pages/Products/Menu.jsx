import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layouts from "../../layouts/Layouts";
import { product } from "../../redux/slices/productSlice";

function Menu() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const productsData = useSelector(state => state.product.productsData);
    const { isLoggedIn } = useSelector(state => state.auth);

    useEffect(() => {
        // This will be called when the components mount
        dispatch(product());
    }, []);

    function handleNavigation(productId) {
        if (isLoggedIn) {
            navigate(`/product/${productId}`);
        } else {
            navigate("/auth/login"); // Redirect to login if not authenticated
        }
    }

    return (
        <Layouts>
            < div className="mx-auto" >
                <div className="flex flex-wrap justify-center">
                    {productsData.map((item) => {
                        return (
                            item.inStock && (
                                <div className="p-4 md:w-1/3" key={item._id}>
                                    <div
                                        className="overflow-hidden border rounded-lg border-opacity-60 hover: cursor-pointer"
                                        onClick={() => handleNavigation(item._id)}
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
                                                ₹ {item.price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    })}
                </div>
            </div >
        </Layouts>
    )
}

export default Menu;