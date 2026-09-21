import apiClient from "../api/apiClient";

const PRODUCTS_PATH = "/admin/products";

export const createProduct = (productData) => {
  return apiClient.post(PRODUCTS_PATH, productData);
};

export const updateProduct = (id, productData) => {
  return apiClient.put(`${PRODUCTS_PATH}/${id}`, productData);
};

export const deleteProduct = (id) => {
  return apiClient.delete(`${PRODUCTS_PATH}/${id}`);
};
