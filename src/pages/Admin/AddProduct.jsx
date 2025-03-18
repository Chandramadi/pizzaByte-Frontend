import Layouts from "../../Layouts/Layouts";
import { addProduct } from "../../Redux/Slices/ProductSlice";
import foodSvg from "../../assets/svg/food1.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddProduct() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [productState, setProductState] = useState({
        productName : '',
        description : '',
        productImage : '',
        price : '',
        quantity : '',
        category : 'veg',
    })

    function handleUserInput(event) {
        const { name, value, files, type } = event.target;
    
        if (type === "file") {
            setProductState((state) => ({
                ...state,
                [name]: files[0], // <-- capture the File object here
            }));
        } else {
            setProductState((state) => ({
                ...state,
                [name]: value,
            }));
        }
    }

    async function handleFormSubmit(event) {
        event.preventDefault(); // prevent the form from reloading the page

        if(!productState.productName || !productState.description || !productState.productImage || !productState.price || !productState.quantity || !productState.category) {
            toast.error("Missing values from the form");
        }

        if(productState.description.length<6) {
            toast.error("Product description must be at least 6 characters");
        }
        if(productState.productName.length<6) {
            toast.error("Product description must be at least 6 characters");
        }
        else{
            // Storing the user data in the database
            const thunkResponse = await dispatch(addProduct(productState));
            // tunkResponse.payload.data contains the data that the backend api sends
            // and thunkResponse contains the data that the thunk sends
            if(thunkResponse?.payload?.data?.success) {
                navigate("/admin/addProduct/success");
            }
        }
    }

    return (
        <Layouts>
            <section className="py-8">
                <div className="flex items-center justify-center px-5">
                    <div className="md:w-1/2">
                        <img src={foodSvg} alt="food" />
                    </div>
                    <div className="max-w-md md:w-4/6 mx-auto mt-8 bg-white p-4">
                        <h2 className="mb-4 text-2xl font-semibold">
                            Add product
                        </h2>

                        <form>
                            {/* product name */}
                            <div className="mb-4">
                                <label
                                    htmlFor="productName"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Product name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    minLength={5}
                                    maxLength={20}
                                    onChange={handleUserInput}
                                    name="productName"
                                    id="productName"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                                />
                            </div>

                            {/* description */}
                            <div className="mb-4">
                                <label
                                    htmlFor="description"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Description
                                </label>
                                <input
                                    type="text"
                                    required
                                    minLength={5}
                                    maxLength={60}
                                    onChange={handleUserInput}
                                    name="description"
                                    id="description"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                                />
                            </div>

                            {/* Price */}
                            <div className="mb-4">
                                <label
                                    htmlFor="price"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Product price <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    required
                                    name="price"
                                    id="price"
                                    onChange={handleUserInput}
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                                />
                            </div>

                            {/* quantity */}
                            <div className="mb-4">
                                <label
                                    htmlFor="quantity"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Product quantity <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    required
                                    name="quantity"
                                    id="quantity"
                                    onChange={handleUserInput}
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                                />
                            </div>

                            {/* category */}
                            <div className="mb-2">
                                <label
                                    htmlFor="category"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Select Category <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="category"
                                    id="category"
                                    onChange={handleUserInput}
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value="veg">Vegetarian</option>
                                    <option value="non-veg">Non-Vegetarian</option>
                                    <option value="drinks">Soft drinks</option>
                                    <option value="sides">Sides</option>
                                </select>
                            </div>


                            {/* image */}
                            <div className="mb-4">
                                <label
                                    htmlFor="productImage"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Product image <span className="text-red-600">(.jpg, .png, .jpeg )</span>
                                </label>
                                <input
                                    type="file"
                                    required
                                    onChange={handleUserInput}
                                    name="productImage"
                                    id="productImage"
                                    accept=".jpg, .jpeg, .png"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                                />
                            </div>

                            <button
                                type="submit"
                                onClick={handleFormSubmit}
                                className="w-full bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
                            >
                                Add product
                            </button>
                        </form>
                    </div>
                </div>

            </section>
        </Layouts>
    )
}

export default AddProduct;