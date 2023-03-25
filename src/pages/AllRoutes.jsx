import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { Movies } from "./Movies";
import { PrivateRoute } from "./PrivateRoute";
import { Signup } from "./Signup";

export const AllRoutes = () => {
  const { isAuth } = useSelector((state) => state.movies);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute isAuth={isAuth}>
              <Movies />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};
