import { Box, Card, CardBody, Flex, HStack, Text } from "@chakra-ui/react";

import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";
import { API_URL } from "../api/config";
import React from "react";
import { Link } from "react-router-dom";
interface TypeProps {
  name: string;
  completed: boolean;
  _id?: string;
}
interface TypeObj {
  dataProps: TypeProps;
  setRenderUI?: (renderUI: boolean) => void;
}

function TodoCard({ dataProps, setRenderUI }: TypeObj) {
  const { _id: taskId, name, completed } = dataProps;
  const deleteTodo = (id: string | undefined) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then((res) => {
        console.log(res, "DELE");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Card my="10px">
      <CardBody>
        <Flex justifyContent={"space-between"} width="450px">
          <Text fontSize={"18px"} fontFamily={"Roboto Mono, monospace"}>
            {name}
          </Text>
          <HStack>
            <Link to={`tasks/${taskId}`}>
              <EditIcon
                w={6}
                h={6}
                color="green.500"
                _hover={{ cursor: "pointer", opacity: 0.2 }}
              />
            </Link>
            <Box />
            <DeleteIcon
              w={6}
              h={6}
              color="red.900"
              _hover={{ cursor: "pointer", opacity: 0.2 }}
              onClick={() => deleteTodo(taskId)}
            />
          </HStack>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default TodoCard;
