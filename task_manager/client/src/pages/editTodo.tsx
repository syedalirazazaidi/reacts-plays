import {
  Card,
  CardBody,
  Text,
  Checkbox,
  Flex,
  Box,
  Input,
  Button,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Form, Link, useParams } from "react-router-dom";
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
  const isError = idData.name === "";

  const [taskedit, setTaskEddited] = useState("");
  let { id } = useParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setIdData((preFormData) => {
      return { ...preFormData, [name]: value };
    });
  };

  const updatedData = {
    completed: idData.completed,
    name: idData.name,
  };

  const updateTask = () => {
    axios.patch(`${API_URL}/${id}`, updatedData).then((res) => {
      setTaskEddited(res?.data?.success);
    });
    setIdData((pre) => {
      return { ...pre, name: "", completed: false };
    });
    setTimeout(() => {
      setTaskEddited("");
    }, 1500);
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
            <Form>
              <Box textAlign={"left"} paddingLeft="90px">
                <Text py="3px">{id}</Text>
                <Box py="3px">
                  <Input
                    required
                    name="name"
                    placeholder="Edit Task"
                    size="sm"
                    w="270px"
                    bg="gray.50"
                    value={idData.name}
                    onChange={handleChange}
                  />
                </Box>

                <Checkbox
                  name="completed"
                  isChecked={idData.completed}
                  onChange={handleChange}
                  py="5px"
                ></Checkbox>
              </Box>
            </Form>
          </Flex>

          <Box py="15px" />
          <Button bg="blue.400" w="460px" onClick={updateTask}>
            Edit Task
          </Button>
          <Text
            fontWeight={500}
            marginTop="3px"
            fontSize={"12px"}
            textAlign="center"
            color={"green.500"}
          >
            {taskedit}
          </Text>
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
