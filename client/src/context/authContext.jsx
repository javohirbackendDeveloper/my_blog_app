import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const user = localStorage.getItem("user");

      return user ? JSON.parse(user) : null;
    } catch (err) {
      console.log("Failed to parse user from localStorage:", err);
      return null;
    }
  });

  const login = async (inputs) => {
    try {
      const res = await axios.post("http://localhost:4000/login", inputs);
      if (res.data) {
        setCurrentUser(res.data);
      } else {
        console.log("No user found");
      }
    } catch (err) {
      console.log("Login error: ", err);
    }
  };

  const logout = async () => {
    try {
      await axios.post("http://localhost:4000/logout");
      setCurrentUser(null);
    } catch (err) {
      console.log("Logout error: ", err);
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
