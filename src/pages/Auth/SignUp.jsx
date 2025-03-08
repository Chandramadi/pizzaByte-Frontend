import SignUpPage from "../../Components/Svgs/SignUpPage";
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="flex flex-wrap items-center h-screen px-10 py-6 mx-auto mb-14">
                    <div className="hidden pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 md:block">
                        <SignUpPage/>
                    </div>

                    <form className="flex flex-col w-full p-8 mt-10 bg-gray-100 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
                        <h2 className="mb-5 text-lg font-medium text-gray-900 title-font">Sign up</h2>

                        <div className="relative mb-4">
                            <label htmlFor="firstName" className="text-sm leading-7 text-gray-600">First Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                placeholder="John"
                                className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-noe focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200" />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="email" className="text-sm leading-7 text-gray-600">Email <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="John@example.com"
                                className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-noe focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200" />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="mobileNumber" className="text-sm leading-7 text-gray-600">Mobile Number <span className="text-red-500">*</span></label>
                            <input
                                type="tel"
                                id="mobileNumber"
                                name="mobileNumber"
                                required
                                maxLength={12}
                                placeholder="Enter 10 digit mobile number"
                                className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-noe focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200" />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="password" className="text-sm leading-7 text-gray-600">Password  <span className="text-red-500">*</span></label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                minLength={8}
                                required
                                placeholder="Enter your password"
                                className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-noe focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200" />
                        </div>

                        <button
                            className="w-full px-8 py-2 text-lg text-white bg-yellow-500 border-0 rounded focus:outline-none hover:bg-yellow-600">
                            Create Account
                        </button>

                        <p className="mt-3 text-xs text-gray-500">Already have an account?
                            <Link to="/auth/login" className="text-yellow-500">Login</Link>
                        </p>
                    </form>
                </div>
            </section>
        </>
    )
}

export default SignUp;