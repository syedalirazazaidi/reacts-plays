import { Flex, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";

function Products() {
  return (
    <SimpleGrid my="20px" p="14px" spacing={10} minChildWidth="250px">
      <Flex h="200px" bg="white.500" border="1px solid" />
      <Flex h="200px" bg="white.500" border="1px solid" />
      <Flex h="200px" bg="white.500" border="1px solid" />
      <Flex h="200px" bg="white.500" border="1px solid" />
    </SimpleGrid>
  );
}

export default Products;
