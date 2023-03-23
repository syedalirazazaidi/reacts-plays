import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
// import Context from "./Context/context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <Context> */}
    <ChakraProvider>
      <App />
    </ChakraProvider>
    {/* </Context> */}
  </React.StrictMode>
);
