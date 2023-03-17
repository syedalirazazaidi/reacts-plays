import {
  Box,
  Button,
  Card,
  CardBody,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../api/config";
import { TTask } from "../types/interface";

function Todos() {
  const [data, setData] = useState<TTask>({ name: "", completed: false });
  const [taskadded, setTaskAdded] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const todoown = {
      name: data.name,
      completed: data.completed,
    };

    axios
      .post(`${API_URL}`, todoown)
      .then((res) => {
        setData({ name: "", completed: false });
        setTaskAdded(res?.data?.success);
      })
      .catch((err) => {
        console.log("Error couldn't create TODO");
        console.log(err.message);
      });
    setTimeout(() => {
      setTaskAdded("");
    }, 1500);
  };
  return (
    <VStack pt="60px">
      <Card>
        <CardBody>
          <Text py="10px" fontSize={"25px"} fontWeight="600">
            Task Manager.
          </Text>
          <Box pb="20px" />
          <form onSubmit={(event) => handleSubmit(event)}>
            <Input
              type="text"
              value={data.name}
              placeholder="e.g. wash dishes"
              w="400px"
              bg="gray.50"
              borderRadius="none"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setData((dataPass) => ({
                  ...dataPass,
                  name: e.target.value,
                  completed: true,
                }))
              }
            />

            <Button
              type="submit"
              bg="blue.400"
              mb="5.5px"
              px="10px"
              color={"white"}
              borderRadius="none"
              _hover={{ border: "none" }}
            >
              Submit
            </Button>
          </form>
          <Text
            fontWeight={500}
            fontSize={"12px"}
            textAlign="left"
            color={"green.500"}
          >
            {taskadded}
          </Text>
        </CardBody>
      </Card>
    </VStack>
  );
}

export default Todos;
