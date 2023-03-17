import {
  Card,
  CardBody,
  Text,
  Checkbox,
  Flex,
  Box,
  Input,
  Button,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";
import { API_URL } from "../api/config";
import { useState } from "react";
import { TTask } from "../types/interface";
function EditTodo() {
  const [idData, setIdData] = useState<TTask>({
    name: "",
    completed: false,
  });
  const [isData, setIsDate] = useState(false);
  let { id } = useParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdData((idData) => ({
      ...idData,
      name: e.target.value,
      completed: e.target.checked,
    }));
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((res) => {
        setIdData({
          ...idData,
          name: res?.data.task.name,
          completed: res?.data.task.completed,
        });
        setIsDate((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!idData) {
    <p>Loading..</p>;
  }
  console.log(idData);
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
              <Text py="3px">{id}</Text>
              <Text py="3px">
                <Input
                  name="name"
                  placeholder="Edit Task"
                  size="sm"
                  w="270px"
                  bg="gray.50"
                  type="text"
                  value={idData.name}
                  onChange={handleChange}
                />
              </Text>
              <Checkbox
                isChecked={idData.completed}
                id="completed"
                type="checkbox"
                onChange={handleChange}
                // value=
                // onChange={(e) => setIdDate(completed, e.target.checked)}
                py="5px"
              ></Checkbox>
            </Box>
          </Flex>
          <Box py="15px" />
          <Button bg="blue.400" w="460px">
            Edit Task
          </Button>
        </CardBody>
      </Card>
      <Box py="50px" />
      <Link to="/">
        <Button
          bg="blackAlpha.800"
          padding="0px 40px 0px 40px"
          _hover={{ bg: "blackAlpha.800", border: "none", opacity: "0.8" }}
        >
          Back To Task
        </Button>
      </Link>
    </Box>
  );
}

export default EditTodo;
