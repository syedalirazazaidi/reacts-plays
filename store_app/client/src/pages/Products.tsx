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
import { IoAppsSharp, IoReorderFourSharp } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";
import { ProductsType } from "../types/interface";
type LoaderData = {
  data?: ProductsType;
};
function Products() {
  const { data } = useLoaderData() as LoaderData;
  console.log(data?.data && data.data.map((s) => s.name));
  // console.log(
  //   data?.map((d: any) => d.name),
  //   ">>>"
  // );
  // console.log(
  //   data?.data.map((dat: any) => dat.name),
  //   "LLL"
  // );
  // console.log(products, ">+=============+>");
  // const { data } = products;
  // data.map((data: any) => console.log(data.name, "LLL")), "?-------?";

  //   const [products, setAllProducts] = useState([]);
  //   useEffect(() => {
  //     axios
  //       .get(`${API_URL}`)
  //       .then((res) => {
  //         setAllProducts(res.data.products);
  //         // setRenderUI((prev) => !prev);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);
  // console.log(products, "%%^%6");
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
        {/* {products &&
          products?.data?.map((product) => {
            product.name;
          })} */}
      </SimpleGrid>
    </Box>
  );
}

export default Products;
