import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound404 from "../../../common/pages/NotFound404";
import MainFeed from "../pages/MainFeed";

function StatRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainFeed />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
}

export default StatRouter;
