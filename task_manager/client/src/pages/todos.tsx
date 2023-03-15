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
  const [data, setData] = useState<TTask>({ name: "", description: false });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const todoown = {
      name: data.name,
      description: data.description,
    };

    axios
      .post(`${API_URL}`, todoown)
      .then((res) => {
        setData({ name: "", description: false });
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error couldn't create TODO");
        console.log(err.message);
      });
  };
  return (
    <VStack pt="130px">
      <Card>
        <CardBody>
          <Text py="20px" fontSize={"25px"} fontWeight="600">
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
                  description: true,
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
        </CardBody>
      </Card>
    </VStack>
  );
}

export default Todos;
