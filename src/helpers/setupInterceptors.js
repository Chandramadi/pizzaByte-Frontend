import toast from "react-hot-toast";
import axiosInstance from "./axiosInstance"; // import your instance here
import { logoutAccount } from "../Redux/Slices/AuthSlice";

export const setupInterceptors = (store) => {
    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            const isAuthError = error.response && (error.response.status === 401 || error.response.status === 403);
            const isOnAuthPage = window.location.pathname.startsWith("/auth/login");

            if (isAuthError && !isOnAuthPage) {
                toast.error("Session expired, please log in again.");

                store.dispatch(logoutAccount());

                setTimeout(() => {
                    window.location.href = "/auth/login";
                }, 10000);
            }

            return Promise.reject(error);
        }
    );
};
