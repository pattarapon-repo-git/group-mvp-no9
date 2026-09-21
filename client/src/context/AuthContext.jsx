import React, { createContext, useState, useEffect } from "react";
import * as authService from "../services/authServices";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const userData = await authService.login({ email, password });
    if (userData && userData.token) {
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    }
    return userData;
  };

  const register = async (userData) => {
    const newUser = await authService.register(userData);
    if (newUser && newUser.token) {
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
    }
    return newUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
