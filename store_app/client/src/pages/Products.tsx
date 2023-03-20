import {
  Box,
  Card,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Select,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { IoAppsSharp, IoReorderFourSharp } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";
import { ProductsEntity, ProductsType } from "../types/interface";
import { useState } from "react";
type LoaderData = {
  data?: ProductsType;
};
function Products() {
  const { data } = useLoaderData() as LoaderData;
  const [gridUI, setGridUI] = useState({
    w: "250px",
    show: true,
  });
  const changeGrid = (button1: string) => {
    if (button1 === "button1") {
      setGridUI((prev) => {
        return { ...prev, w: "250px", show: true };
      });
    } else {
      setGridUI((prev) => {
        return { ...prev, w: "600px", show: false };
      });
    }
  };
  return (
    <Box>
      <Flex textAlign="center" alignItems="center" gap="2" p={2} m={2}>
        <Box
          _hover={{ cursor: "pointer" }}
          border={"1px solid black"}
          borderRadius="2px"
          onClick={() => changeGrid("button1")}
          bg={gridUI.show ? "black" : "white"}
          color={gridUI.show ? "white" : "black"}
        >
          <IoAppsSharp />
        </Box>
        <Box
          border={"1px solid black"}
          _hover={{ cursor: "pointer" }}
          bg={!gridUI.show ? "black" : "white"}
          color={!gridUI.show ? "white" : "black"}
          borderRadius="2px"
          onClick={() => changeGrid("button2")}
        >
          <IoReorderFourSharp />
        </Box>
        <Text>8 Products Found</Text>
        <Divider m={4} w="350px" />
        <Spacer />
        <Text>Sort By</Text>
        <Select variant="flushed" w="200px" placeholder="">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Flex>
      <SimpleGrid my="20px" p="14px" spacing={10} minChildWidth={gridUI.w}>
        {data?.data &&
          data?.data?.map((product: ProductsEntity) => (
            <Box>
              <Card>
                <Image
                  boxSize="200px"
                  objectFit="cover"
                  src={`${product?.image}`}
                  alt="tableimg"
                />
              </Card>
              <Flex marginTop="10px">
                <Text>{product.name}</Text>
                <Spacer />
                <Text>{product.price}</Text>
              </Flex>
            </Box>
          ))}
      </SimpleGrid>
    </Box>
  );
}

export default Products;
