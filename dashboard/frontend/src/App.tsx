import { useState } from "react";

import "./App.css";
import { Box } from "@chakra-ui/react";
import { SignUp } from "./pages/signup";
import GetData from "./pages/getData";
function App() {
  return (
    <Box>
      <SignUp />
      <GetData />
    </Box>
  );
}

export default App;
