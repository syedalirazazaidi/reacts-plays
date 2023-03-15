import {
  Box,
  Button,
  Card,
  CardBody,
  FormControl,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function Todos() {
  return (
    <VStack pt="130px">
      <Card>
        <CardBody>
          <Text py="20px" fontSize={"25px"}>
            Task Manager.
          </Text>
          <FormControl pb="40px">
            <Input
              type="text"
              placeholder="e.g. wash dishes"
              w="400px"
              bg="gray.50"
              borderRadius="none"
            />
            <Button
              type="submit"
              bg="blue.400"
              mb="6px"
              px="10px"
              color={"white"}
              borderRadius="none"
            >
              Submit
            </Button>
          </FormControl>
        </CardBody>
      </Card>
    </VStack>
  );
}

export default Todos;
