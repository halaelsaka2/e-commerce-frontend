import axiosInstance from "../axiosInstance";

const getAllProducts = async (page, subId) => {
  return await axiosInstance.get(`/products/${page}?subId=${subId}`);
};
const getProductsBySubId = async (subId) => {
  return await axiosInstance.get(`/products/getBySubId/${subId}`);
};
const editProduct = async (product) => {
  return await axiosInstance.put(`/products/`, product);
};
const addProduct = async (product) => {
  return await axiosInstance.post(`/products/`, product);
};
const deleteProduct = async (id) => {
  return await axiosInstance.delete(`/products/${id}`);
};
const obj = { getAllProducts, deleteProduct, addProduct, editProduct, getProductsBySubId };
export default obj;
