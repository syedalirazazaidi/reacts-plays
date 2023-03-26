import {
  Box,
  Card,
  Divider,
  Flex,
  Image,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { IoAppsSharp, IoReorderFourSharp } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";
import { ProductsEntity, ProductsType } from "../types/interface";
import { useContext, useState } from "react";
import Select from "react-select";
import { options } from "../helperfunctions/options";
import { DataContext, ProductProvider } from "../context/DataContext";

type LoaderData = {
  data?: ProductsType;
};

function Products() {
  const { data } = useLoaderData() as LoaderData;
  // const { value, setValue }: any = useContext(DataContext);
  // const { newLoSorted, setLoSorted }: any = useContext(DataContext);
  const [newLoSorted, setLoSorted] = useState(data?.data);
  const [gridUI, setGridUI] = useState({
    w: "250px",
    show: true,
  });

  const handleChange = (e: any) => {
    const newvalue = e.value;
    if (newvalue === "az") {
      const copyData = newLoSorted;
      const sort: any =
        copyData &&
        [...copyData]?.sort((a: any, b: any) => (a.name > b.name ? 1 : -1));

      setLoSorted(sort);
    } else if (newvalue === "za") {
      const copyData = newLoSorted;
      const sort: any =
        copyData && [...copyData]?.sort((a, b) => (a.name > b.name ? -1 : 1));

      setLoSorted(sort);
    } else if (newvalue === "lowest") {
      const copyData = newLoSorted;
      const sort: any =
        copyData && [...copyData]?.sort((a: any, b: any) => a.price - b.price);

      setLoSorted(sort);
    } else if (newvalue === "highest") {
      const copyData = newLoSorted;
      const sort: any =
        copyData && [...copyData]?.sort((a: any, b: any) => b.price - a.price);

      setLoSorted(sort);
    }
  };

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
          <Text>9 Products Found </Text>
          <Divider m={4} w="350px" />
          <Spacer />
          <Text fontWeight={"550"}>Sort By</Text>

          <Select
            options={options}
            placeholder="select a value"
            onChange={handleChange}
          />
        </Flex>
        <SimpleGrid my="20px" p="14px" spacing={10} minChildWidth={gridUI.w}>
          {newLoSorted?.length &&
            newLoSorted &&
            newLoSorted?.map((product: ProductsEntity) => (
              <Box key={product?._id}>
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
    </Box>
  );
}

export default Products;
