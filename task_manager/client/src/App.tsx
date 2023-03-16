import "./App.css";
import { Box, VStack } from "@chakra-ui/react";
import Todos from "./pages/todos";
import AllTodos from "./pages/allTodos";

function App() {
  return (
    <VStack>
      <Todos />
      <Box paddingBottom="20px" />
      <AllTodos />
    </VStack>
  );
}

export default App;
