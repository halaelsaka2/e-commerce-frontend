import axiosInstance from "../axiosInstance";
const login = async (username, password) => {
  return await axiosInstance.post(`/users/authenticate`, { username, password });
};
const checkIfUserAuthenticated = async () => {
  return await axiosInstance.get("/users/checkAuth");
};
const obj= {
  login,
  checkIfUserAuthenticated,
};
export default obj;
