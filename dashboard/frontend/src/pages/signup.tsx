import { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import axios, { AxiosResponse } from "axios";
interface MyFormState {
  name: string;
  password: string;
}
const initialFormState: MyFormState = {
  name: "",
  password: "",
};
const API_URL = "http://localhost:5000/api/v1/login";
function SignUp() {
  const [login, setLogin] = useState(initialFormState);
  const [token, setToken] = useState();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const logindata = {
      name: login.name,
      password: login.password,
    };

    axios
      .post(`${API_URL}`, logindata)
      .then((data: any) => {
        console.log("Form submitted successfully:", data);
        setToken(data?.data);
        localStorage.setItem("token", JSON.stringify(data?.data));
        setLogin(initialFormState);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };
  console.log(login, "login");

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "4" }}
      px={{ base: "0", sm: "8" }}
      bg="gray.60"
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "md" }} fontWeight="500">
              Login/Register
            </Heading>
          </Stack>
        </Stack>
        <Box
          w="400px"
          h="350px"
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg-surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <form onSubmit={onSubmit}>
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl isRequired>
                  <FormLabel htmlFor="user">User Name</FormLabel>
                  <Input
                    id="text"
                    type="text"
                    name="name"
                    value={login.name}
                    onChange={handleChange}
                  />
                </FormControl>
              </Stack>
              <Stack spacing="5">
                <FormControl isRequired>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    value={login.password}
                    onChange={handleChange}
                  />
                </FormControl>
              </Stack>
              <Stack spacing="6">
                <Button type="submit" variant="primary" bg="blue.200" mt="40px">
                  Submit
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Container>
  );
}

export default SignUp;
