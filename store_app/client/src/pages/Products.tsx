import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Select,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IoAppsSharp, IoReorderFourSharp } from "react-icons/io5";

function Products() {
  // IoAppsSharp
  // IoReorderFourSharp
  return (
    <Box>
      <Flex textAlign="center" alignItems="center" p={2} m={2}>
        <IoAppsSharp />
        <IoReorderFourSharp />
        <Text>8 Products Found</Text>
        <Divider m={4} w="420px" />
        <Spacer />
        <Text>Sort By</Text>
        <Select variant="flushed" w="200px" placeholder="">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Flex>
      <SimpleGrid my="20px" p="14px" spacing={10} minChildWidth="250px">
        <Flex h="200px" bg="white.500" border="1px solid" />
        <Flex h="200px" bg="white.500" border="1px solid" />
        <Flex h="200px" bg="white.500" border="1px solid" />
        <Flex h="200px" bg="white.500" border="1px solid" />
      </SimpleGrid>
    </Box>
  );
}

export default Products;
