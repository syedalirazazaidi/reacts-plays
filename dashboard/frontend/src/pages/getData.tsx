import { Box, Button, Container, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

import { useState, useEffect } from "react";

function GetData() {
  const [stateToken, setStateToken] = useState<any>(null);
  useEffect(() => {
    const savedData = localStorage.getItem("token");
    if (savedData) {
      setStateToken(JSON.parse(savedData));
    }
  }, [stateToken]);
  const fetchData = () => {
    console.log("first");
  };

  return (
    <Box>
      <Text fontWeight={600} fontSize="22px">
        Dashboard
      </Text>
      {stateToken && <Text color="green"> Token Present</Text>}

      <Container marginTop="45px" bg="gray.100" w="400px" h="50px">
        {stateToken && <Text textAlign="left"> {stateToken.token}</Text>}
      </Container>
      <VStack mt="50px">
        <Button w="400px" borderRadius="3px" bg="blue.200" onClick={fetchData}>
          Fetch Data
        </Button>
      </VStack>
    </Box>
  );
}

export default GetData;
