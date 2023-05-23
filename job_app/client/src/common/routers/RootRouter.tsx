import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import StatRouter from "../../modules/stats/routers/StatRouter";
import Login from "../../modules/users/components/Login";
import SignUpForm from "../../modules/users/components/Register";
import AddJob from "../pages/AddJob";
import AllJobs from "../pages/AllJobs";
import Home from "../pages/Home";
import NotFound404 from "../pages/NotFound404";
import Profile from "../pages/Profile";
import Sidebar from "../components/Sidebar";
import Stats from "../pages/Stats";
import Dashboard from "../pages/Dashboard";
import { useAuthContext } from "../../modules/users/hooks/useUser";

export default function RootRouter() {
  const { user }: any = useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignUpForm />} />
        <Route path="/" element={<Login />} />
        <Route
          path="/"
          // element={<Dashboard />}
          element={user?.token ? <Dashboard /> : <Navigate to="/" />}
        >
          <Route path="/dashboard" element={<Stats />} />
          <Route path="/all-job" element={<AllJobs />} />
          <Route path="/add-jobs" element={<AddJob />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
