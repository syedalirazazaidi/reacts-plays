import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../../modules/users/components/Login";
import SignUpForm from "../../modules/users/components/Register";
import AddJob from "../pages/AddJob";
import AllJobs from "../pages/AllJobs";
import Home from "../pages/Home";
import NotFound404 from "../pages/NotFound404";
import Profile from "../pages/Profile";
import Sidebar from "../pages/Sidebar";
import Stats from "../pages/Stats";

export default function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/register" element={<SignUpForm />} />
        <Route path="/sidebar" element={<Sidebar />} />

        <Route path="/" element={<Stats />} />
        <Route path="/all-jobs" element={<AllJobs />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}
