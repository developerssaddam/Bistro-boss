import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import Swal from "sweetalert2";

const axiosSecure = axios.create({
  baseURL: "https://bistro-boss-server-seven-olive.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logoutUser } = useAuth();

  // interceptors for send token to backend
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("accessToken");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // Logoun unauthorize user
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        logoutUser().then(() => {
          Swal.fire({
            text: "Forbidden access!",
            icon: "error",
          });
          navigate("/login");
        });
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
