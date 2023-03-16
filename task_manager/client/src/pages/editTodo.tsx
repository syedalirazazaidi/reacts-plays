import {
  Card,
  CardBody,
  HStack,
  Text,
  Checkbox,
  CheckboxGroup,
  Flex,
  Box,
  grid,
  Spacer,
  Input,
  Button,
} from "@chakra-ui/react";
import React from "react";

function EditTodo() {
  return (
    <Box>
      <Card my="10px" bg="gray.100">
        <CardBody>
          <Text fontSize={"25px"} fontWeight="600" paddingBottom={10}>
            Edit Task
          </Text>
          <Flex w="500px">
            <Box textAlign={"left"} paddingLeft="20px">
              <Text py="3px" fontWeight={500}>
                Task ID
              </Text>
              <Text py="3px" fontWeight={500}>
                Name
              </Text>
              <Text py="3px" fontWeight={500}>
                Completed
              </Text>
            </Box>
            <Box textAlign={"left"} paddingLeft="90px">
              <Text py="3px">Task IDENTITY</Text>
              <Text py="3px">
                <Input
                  placeholder="Edit Task"
                  size="sm"
                  w="270px"
                  bg="gray.50"
                />
              </Text>
              <Checkbox py="5px" />
            </Box>
          </Flex>
          <Box py="15px" />
          <Button bg="blue.400" w="460px">
            Button
          </Button>
        </CardBody>
      </Card>
      <Box py="50px" />
      <Button>Back To Task</Button>
    </Box>
  );
}

export default EditTodo;
