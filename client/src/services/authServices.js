import apiClient from "../api/apiClient";

export const login = async (credentials) => {
  return await apiClient.post("/auth/login", credentials);
};

export const register = async (userData) => {
  return await apiClient.post("/auth/register", userData);
};
