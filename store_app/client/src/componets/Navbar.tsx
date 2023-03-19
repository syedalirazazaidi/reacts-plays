import { Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Flex
      as="nav"
      p="20px"
      bg="#eaded7"
      px={{ base: "24px", md: "200px", lg: "200px" }}
      py="24px"
    >
      <Heading size="md" fontSize={22} fontWeight="500">
        Shopping-app
      </Heading>
      <Spacer />
      <Link to="#">
        {" "}
        <Text color="blackAlpha.900" fontSize={22}>
          Cart
        </Text>
      </Link>
    </Flex>
  );
}

export default Navbar;
