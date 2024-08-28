// components/Auth.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  const isAuthenticated = window.localStorage.getItem("email"); // Or any other authentication check

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default Auth;
