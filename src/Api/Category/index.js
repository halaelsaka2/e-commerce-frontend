import axiosInstance from "../axiosInstance";

const getAllCategories = async () => {
  return await axiosInstance.get("/categories/");
};

const editCategory = async (category) => {
  return await axiosInstance.put("/categories/", category);
};

const addCategory = async (category) => {
  return await axiosInstance.post("/categories/", category);
};

const deleteCategory = async (id) => {
  return await axiosInstance.delete(`/categories/${id}`);
};

const obj = { getAllCategories, editCategory, addCategory, deleteCategory };
export default obj;
