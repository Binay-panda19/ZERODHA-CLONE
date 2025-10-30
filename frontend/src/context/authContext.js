import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext({
  user: null,
  loading: true,
  login: (provider) => {},
  logout: async () => {},
  getAccessToken: async () => null,
});

export const AuthProvider = ({ children }) => {
  const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"; // Vite uses VITE_ prefix
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${API}/auth/me`, {
          withCredentials: true,
        });
        if (res.data.user) setUser(res.data.user);
      } catch (e) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const login = (provider) => {
    window.location.href = `${API}/auth/${provider}`;
  };

  const refreshAccessToken = async () => {
    try {
      const res = await axios.post(
        `${API}/auth/refresh`,
        {},
        { withCredentials: true }
      );
      if (res.data.accessToken) {
        setAccessToken(res.data.accessToken);
        return res.data.accessToken;
      }
      return null;
    } catch (e) {
      setUser(null);
      setAccessToken(null);
      return null;
    }
  };

  const getAccessToken = async () => {
    if (!accessToken) {
      return await refreshAccessToken();
    }
    return accessToken;
  };

  const logout = async () => {
    await axios.post(`${API}/auth/logout`, {}, { withCredentials: true });
    setUser(null);
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        getAccessToken,
        refreshAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
