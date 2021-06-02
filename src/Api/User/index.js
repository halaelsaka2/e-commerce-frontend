import axiosInstance from "../axiosInstance";

const login = async (values) => {
  return await axiosInstance.post("/users/login", { email: values.email, password: values.password });
};
const register = async (values) => {
  return await axiosInstance.post("/users/register", {
    email: values.email,
    password: values.password,
    roleId: 2,
    userName: values.userName,
  });
};
const getAllUsers = async () => {
  return await axiosInstance.get("/users/");
};
const addUser = async (user) => {
  return await axiosInstance.post("/users/", { ...user });
};
const editUser = async (user) => {
  return await axiosInstance.put(`/users/editUser`, user);
};

const deleteUser = async (id) => {
  return await axiosInstance.delete(`/users/${id}`);
};
const obj = { login, register, getAllUsers, addUser, editUser, deleteUser };
export default obj;
