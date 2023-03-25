import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({ isAuth, children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) return navigate("/signup");
  });
  if (isAuth) return <>{children}</>;
};
