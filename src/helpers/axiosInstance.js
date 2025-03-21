import axios from "axios";

const axiosInstance = axios.create(); // create a new instance of axios

// Since you're using Vite, environment variables should be accessed via import.meta.env, not process.env.
axiosInstance.defaults.baseURL = "https://pizzabyte-backend.onrender.com";

axiosInstance.defaults.withCredentials = true;
// This allows Axios to send cookies along with requests when interacting with an API that sets cookies (such as authentication-related APIs).

export default axiosInstance;