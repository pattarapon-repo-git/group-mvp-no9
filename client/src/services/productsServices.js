import apiClient from "../api/apiClient";

const PRODUCTS_PATH = "/products";

export const getProducts = (filters = {}) => {
  // Convert { search: "test", type: "Ebook" } into "?search=test&type=Ebook"
  const queryString = new URLSearchParams(filters).toString();
  const url = queryString ? `${PRODUCTS_PATH}?${queryString}` : PRODUCTS_PATH;
  return apiClient.get(url);
};

export const getProductById = (id) => {
  return apiClient.get(`${PRODUCTS_PATH}/${id}`);
};
