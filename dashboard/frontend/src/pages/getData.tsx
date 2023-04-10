import { Box, Button, Container, HStack, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

import { useState, useEffect } from "react";
const API_URL = "http://localhost:5000/api/v1/dashboard";

function GetData() {
  const [stateToken, setStateToken] = useState<any>(null);
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const savedData = localStorage.getItem("token");
    if (savedData) {
      setStateToken(JSON.parse(savedData));
    }
  }, [stateToken]);
  const fetchData = () => {
    const dat = `Bearer ${stateToken.token}`;

    const headers = {
      Authorization: dat,
    };

    axios
      .get(`${API_URL}`, { headers })
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <Box>
      <Text fontWeight={600} fontSize="22px">
        Dashboard
      </Text>
      {stateToken ? (
        <Text color="green"> Token Present</Text>
      ) : (
        <Text color="red">No Token present</Text>
      )}

      {stateToken ? (
        <Container marginTop="45px" bg="gray.100" w="400px" h="50px">
          {/* {stateToken && <Text textAlign="left"> {stateToken.token}</Text>} */}

          {data?.msg}
          {data?.secret}
        </Container>
      ) : (
        <Text>undefined</Text>
      )}
      <VStack mt="50px">
        <Button w="400px" borderRadius="3px" bg="blue.200" onClick={fetchData}>
          Fetch Data
        </Button>
      </VStack>
    </Box>
  );
}

export default GetData;
