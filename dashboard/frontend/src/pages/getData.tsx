import { Box, Button, Container, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

function GetData() {
  return (
    <Box>
      <Text>Dashboard</Text>
      <Container marginTop="45px" bg="gray.100" w="400px" h="50px">
        <Text textAlign="left"> sadassdas</Text>
      </Container>
      <VStack mt="50px">
        <Button w="400px" borderRadius="3px" bg="blue.200">
          Fetch Data
        </Button>
      </VStack>
    </Box>
  );
}

export default GetData;
