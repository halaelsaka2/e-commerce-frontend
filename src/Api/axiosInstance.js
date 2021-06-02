import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
});
console.log(process.env.REACT_APP_API_ENDPOINT);
axiosInstance.interceptors.request.use((cfg) => {
  cfg.headers["Content-Type"] = "application/json";
  if (localStorage.getItem("token") !== null) {
    cfg.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
  }
  return cfg;
});

export default axiosInstance;
