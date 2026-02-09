import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // backend URL
  withCredentials: true, // if using cookies / auth
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: interceptors
api.interceptors.request.use(
  (config) => {
    // Example: attach token
    // const token = localStorage.getItem("token");
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Centralized error handling
    return Promise.reject(error);
  },
);

export default api;
