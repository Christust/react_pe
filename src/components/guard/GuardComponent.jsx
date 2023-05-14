import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const GuardComponent = ({ children }) => {
  let token = useSelector((state) => state.user.token);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default GuardComponent;
