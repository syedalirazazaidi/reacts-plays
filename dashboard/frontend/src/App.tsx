import { useState } from "react";

import "./App.css";
import { Box } from "@chakra-ui/react";
// import { SignUp } from "./pages/signup";
import GetData from "./pages/getData";
import SignUp from "./pages/signup";
function App() {
  return (
    <Box>
      {/* <SignUp /> */}
      <SignUp />
      <GetData />
    </Box>
  );
}

export default App;
