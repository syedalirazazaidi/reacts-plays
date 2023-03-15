import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { VStack } from "@chakra-ui/react";
import Todos from "./pages/todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <VStack>
      <Todos />
    </VStack>
  );
}

export default App;
