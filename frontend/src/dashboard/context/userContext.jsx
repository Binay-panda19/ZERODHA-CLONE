import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const navigate = useNavigate();

  // ✅ Fetch user using cookie on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${API}/auth/me`, {
          withCredentials: true,
        });
        if (res.data?.user) {
          setUser(res.data.user);
        }
      } catch (err) {
        console.warn(
          "No valid session found:",
          err.response?.data || err.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // ✅ Called when user successfully logs in
  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  // ✅ Logout clears cookie + resets state
  const handleLogout = async () => {
    try {
      await axios.post(`${API}/auth/logout`, {}, { withCredentials: true });
    } catch (err) {
      console.error("Logout error:", err.message);
    } finally {
      setUser(null);
      navigate("/signup");
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        loginSuccess: handleLoginSuccess,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
