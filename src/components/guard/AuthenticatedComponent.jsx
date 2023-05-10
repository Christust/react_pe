import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AuthenticatedComponent = ({ children }) => {
  let token = useSelector((state) => state.user.token);
  let location = useLocation();

  if (token) {
    return <Navigate to="/" />;
  }

  return children;
};

export default AuthenticatedComponent;
