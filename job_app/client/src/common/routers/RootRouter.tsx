import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../../modules/users/components/Login";
import SignUpForm from "../../modules/users/components/Register";
import Home from "../pages/Home";
import NotFound404 from "../pages/NotFound404";

export default function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUpForm />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}
