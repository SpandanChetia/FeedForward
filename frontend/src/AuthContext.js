import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if there is a token in local storage on initialization
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Clear the token from local storage on logout
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, handleLoginSuccess, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
