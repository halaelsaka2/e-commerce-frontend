import axiosInstance from "../axiosInstance";

const getAllSubCategories = async () => {
  return await axiosInstance.get("/subCategories/");
};
const addSubCat = async (subCategory) => {
  return await axiosInstance.post(`/subCategories/`, subCategory);
};
const deleteSubCat = async (id) => {
  return await axiosInstance.delete(`/subCategories/${id}`);
};
const editSubCat = async (role) => {
  return await axiosInstance.put(`/subCategories/`, role);
};

const obj = { getAllSubCategories, editSubCat, addSubCat, deleteSubCat };
export default obj;
