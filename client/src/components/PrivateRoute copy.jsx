import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import UserStore from "../store/UserStore";
const PrivateRoute = ({ children }) => {
  let { isLogin } = UserStore();
  let location = useLocation();

  if (isLogin() === true) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default PrivateRoute;
