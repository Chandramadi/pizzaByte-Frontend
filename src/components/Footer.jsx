import FaceBook from "./Svgs/FaceBook";
import InstaGram from "./Svgs/InstaGram";
import LinkedIn from "./Svgs/LinkedIn";
import Twitter from "./Svgs/Twitter";

function Footer() {
    return (
        <footer className="text-gray-600 body-font ">
            <div className="bg-gradient-to-r from-amber-50 to-orange-300">
                <div className="container flex flex-col flex-wrap px-5 py-10 mx-auto sm:flex-row md:px-8 px-2">
                    <p className="text-sm text-center text-gray-500 sm:text-left">
                        &copy; 2024 PizzaByte
                    </p>

                    <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                        <a className="text-[#FF9110] hover:text-[#ff8f1077] hover:cursor-pointer">
                            <FaceBook/>
                        </a>
                        <a className="ml-3 text-[#FF9110] hover:text-[#ff8f1077] hover:cursor-pointer">
                            <Twitter/>
                        </a>
                        <a className="ml-3 text-[#FF9110] hover:text-[#ff8f1077] hover:cursor-pointer">
                            <InstaGram/>
                        </a>
                        <a className="ml-3 text-[#FF9110] hover:text-[#ff8f1077] hover:cursor-pointer">
                            <LinkedIn/>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;