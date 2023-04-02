import { ChevronDownIcon } from "@chakra-ui/icons";
// import { categories } from "../helperfunctions/categories";
import { useState, useContext } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
  Box,
  Checkbox,
  Input,
  List,
  ListItem,
  Select,
  Text,
} from "@chakra-ui/react";
import Colors from "./Colors";
import { DataContext } from "../context/DataContext";
interface CatType {
  id: number;
  name: string;
}
const categories: CatType[] = [
  { id: 1, name: "all" },
  { id: 2, name: "office" },
  { id: 3, name: "living room" },
  { id: 4, name: "kitchen" },
  { id: 5, name: "bedroom" },
  { id: 6, name: "dining" },
  { id: 7, name: "kids" },
];

function Sidebar() {
  var checkmark = "✓";
  const [selectedColor, setSelectedColor] = useState(checkmark);
  const [selectedNum, setSelectedNum] = useState<number | string>(null ?? "");
  const {
    newLoSorted,
    filtervalue,
    setFilterValue,
    setLoSorted,
    filteredCartItems,
    filterCartItems,
    handleFilter,
    setselctedCategory,
    category,
  }: any = useContext(DataContext);
  const [selectedCategory, setSelectedCategory] = useState("");

  const options = [
    { value: "all", label: "all" },
    { value: "marcos", label: "marcos" },
    { value: "liddy", label: "liddy" },
    { value: "ikea", label: "ikea" },
    { value: "caressa", label: "caressa" },
  ];

  // function CategorySelected(category: any) {
  //   // let newSorteddata = [...newLoSorted];
  //   let newdattype;
  //   if (category.name === "all") {
  //     // setLoSorted(newLoSorted);
  //     return;
  //   } else if (category.name === "office") {
  //     // const copyData = [...newLoSorted];

  //     newdattype = newLoSorted?.filter((fitData: any) => {
  //       fitData.type === "office";
  //     });
  //     // setLoSorted(newdattype);
  //   } else if (category.name === "kitchen") {
  //     // const copyData = [...newLoSorted];
  //     newdattype = newLoSorted?.filter((fitData: any) => {
  //       return fitData.type === category.name;
  //     });
  //     console.log(newdattype, "KITCHEN");
  //     // setLoSorted(newdattype);
  //   } else if (category.name === "dining") {
  //     // const copyData = [...newLoSorted];

  //     newdattype = newLoSorted?.filter(
  //       (fitData: any) => fitData.type === "dining"
  //     );
  //     console.log(newdattype, "DINING");
  //   }
  //   setLoSorted(newdattype);
  // }
  const CategorySelected = (categoryvalue: any) => {
    // console.log(category.name, "???");
    // setSelectedCategory(category.name);
    // if (category?.name) {
    //   setFilterValue(category.name);
    //   handleFilter();
    // }
    console.log(categoryvalue.name, "ANWER");
    if (categoryvalue.name) {
      setselctedCategory(categoryvalue.name);
      // handleFilter();
    }
  };

  console.log(selectedCategory, "////////");
  return (
    <Box>
      <Input placeholder="Search" border="none" bg="gray.50" />
      <List color="black" fontSize="1.2em" spacing={2}>
        <Text fontWeight={500} marginTop="20px">
          Category
        </Text>
        {categories.map((category: CatType) => (
          <ListItem
            fontWeight={300}
            fontSize={14}
            color="#8b9fb3"
            key={category.id}
          >
            <Button
              variant="link"
              type="button"
              value={category.name}
              _focus={{
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
              _hover={{ cursor: "pointer", textUnderlineOffset: "4px" }}
              onClick={() => CategorySelected(category)}
              _selected={{}}
            >
              <Text marginRight="60px"> {category.name}</Text>
            </Button>
          </ListItem>
        ))}
      </List>
      <Text fontWeight={500} marginTop="20px">
        Company
      </Text>
      <Select
        icon={<ChevronDownIcon />}
        variant="filled"
        placeholder="all"
        w="100px"
        fontSize={12}
        fontWeight="500"
        marginTop="14px"
        padding="1px 1px 1px 1px"
      >
        <option value="liddy">liddy</option>
        <option value="ikea">ikea</option>
        <option value="marcos">marcos</option>
        <option value="caressa">caressa</option>
      </Select>

      <Text fontWeight={500} marginTop="20px">
        Colors
      </Text>
      <Colors
        selectedNum={selectedNum}
        selectedColor={selectedColor}
        setSelectedNum={setSelectedNum}
      />

      <Text fontWeight={500} marginTop="20px">
        Price
      </Text>
      <Slider aria-label="slider-ex-2" colorScheme="pink" defaultValue={30}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Box marginTop="20px" />
      <Button bg="red.600" colorScheme="#ffff" py="1px">
        Clear Filter
      </Button>
    </Box>
  );
}

export default Sidebar;
