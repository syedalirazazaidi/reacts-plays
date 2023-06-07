import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./common/providers/AppProvider";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer autoClose={2000} />
    <AppProvider />
  </React.StrictMode>
);
