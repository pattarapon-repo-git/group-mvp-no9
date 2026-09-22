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
    if (userData && userData._id) {
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    }
    return userData;
  };

  const register = async (userData) => {
    const newUser = await authService.register(userData);
    if (newUser && newUser._id) {
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
    }
    return newUser;
  };

  const logout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error("Logout error", error);
    }
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
