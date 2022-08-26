import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage, RegisterPage, VerifyPage } from "../pages";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/verify" element={<VerifyPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
