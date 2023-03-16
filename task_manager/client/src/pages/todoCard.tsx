import {
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { TTask } from "../types/interface";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

function TodoCard({
  dataProps,
}: {
  dataProps: { name: string; completed: boolean; _id?: string };
}) {
  const { _id, name, completed } = dataProps;
  return (
    <Card my="10px">
      <CardBody>
        <Flex justifyContent={"space-between"} width="450px">
          <Text>{name}</Text>
          <HStack>
            <EditIcon w={6} h={6} color="green.500" />
            <DeleteIcon w={6} h={6} color="red.900" />
          </HStack>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default TodoCard;
