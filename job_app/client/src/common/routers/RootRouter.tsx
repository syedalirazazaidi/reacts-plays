import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <p className="text-3xl font-bold underline bg-red-300">
              Hello new world
            </p>
          }
        />
        <Route path="*" element={<p>Not found 404</p>} />
      </Routes>
    </BrowserRouter>
  );
}
