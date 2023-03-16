import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Box, VStack } from "@chakra-ui/react";
import Todos from "./pages/todos";
import AllTodos from "./pages/allTodos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <VStack>
      <Todos />
      <Box paddingBottom="20px" />
      <AllTodos />
    </VStack>
  );
}

export default App;
