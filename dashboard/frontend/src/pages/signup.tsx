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

export const SignUp = () => (
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
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl isRequired>
              <FormLabel htmlFor="user">User Name</FormLabel>
              <Input id="text" type="text" />
            </FormControl>
          </Stack>
          <Stack spacing="5">
            <FormControl isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" type="password" />
            </FormControl>
          </Stack>
          <Stack spacing="6">
            <Button variant="primary" bg="blue.200" mt="40px">
              Submit
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
);
