import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./common/providers/AppProvider";
import 'remixicon/fonts/remixicon.css'
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>
);
