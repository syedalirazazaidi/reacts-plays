import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import MainLayout from "../layout/MainLayout";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllJobs from "./AllJobs";
import AddJob from "./AddJob";
import Profile from "./Profile";

function Dashboard() {
  return (
    <MainLayout>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="flex-1 bg-gray-100 p-4">
          <Outlet />
        </div>
      </div>
      {/* 
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </div> */}
    </MainLayout>
  );
}

export default Dashboard;
