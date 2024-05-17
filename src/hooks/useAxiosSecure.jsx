import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "./reviews.json",
  withCredentials: true,
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
