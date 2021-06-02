import axiosInstance from "../axiosInstance";

const getAllRoles = async () => {
  return await axiosInstance.get("/roles/");
};
const addRole = async (role) => {
  return await axiosInstance.post(`/roles/`, role);
};
const deleteRole = async (id) => {
  return await axiosInstance.delete(`/roles/${id}`);
};
const editRole = async (role) => {
  return await axiosInstance.put(`/roles/`, role);
};

const obj = { getAllRoles, deleteRole, addRole, editRole };
export default obj;
