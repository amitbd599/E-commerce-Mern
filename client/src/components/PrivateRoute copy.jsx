import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserStore from "../store/UserStore";
const PrivateRoute = ({ children }) => {
  let { isLogin } = UserStore();
  const navigate = useNavigate();
  const location = useLocation();

  if (isLogin() === true) {
    return children;
  } else {
    return navigate('/login', { state: { from: location } });
  }
};

export default PrivateRoute;
