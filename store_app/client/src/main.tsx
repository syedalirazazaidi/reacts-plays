import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { ProductProvider } from "./context/ProductContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <ProductProvider> */}
      <App />
      {/* </ProductProvider> */}
    </ChakraProvider>
  </React.StrictMode>
);
