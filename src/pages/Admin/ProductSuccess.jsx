import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Layouts from "../../layouts/Layouts";

export default function ProductSuccess() {

    const navigate = useNavigate();

    return (
        <Layouts>
            <div className="flex items-center justify-center min-h-screen bg-green-50">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
                >
                    <div className="flex justify-center mb-4">
                        <CheckCircle className="text-green-500 w-16 h-16" />
                    </div>
                    <h1 className="text-2xl font-semibold text-gray-800 mb-2">Product Added Successfully!</h1>
                    <p className="text-gray-600 mb-6">
                        Your product has been added and is now live in your store.
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:bg-green-600 text-white py-2 rounded-xl font-medium transition-all"
                    >
                        Go to Dashboard
                    </button>
                    <button
                        onClick={() => navigate('/admin/addProduct')}
                        className="w-full mt-3 border bg-gradient-to-r from-orange-500 to-orange-400 hover:bg-green-50 py-2 rounded-xl font-medium transition-all"
                    >
                        Add Another Product
                    </button>
                </motion.div>
            </div>
        </Layouts>
    );
}
