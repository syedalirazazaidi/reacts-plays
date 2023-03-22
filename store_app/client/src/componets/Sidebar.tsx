import { ChevronDownIcon } from "@chakra-ui/icons";
// import { categories } from "../helperfunctions/categories";
import { useState } from "react";
import {
  Flex,
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

const categories: string[] = [
  "All",
  "Office",
  "Living Room",
  "Kitchen",
  "Bedroom",
  "Dining",
  "Kids",
];
const colorPicker: string[] = [
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
];

function Sidebar() {
  var checkmark = "✓";
  const [selectedColor, setSelectedColor] = useState(checkmark);
  const [selectedNum, setSelectedNum] = useState<number | string>(null ?? "");

  const options = [
    { value: "all", label: "all" },
    { value: "marcos", label: "marcos" },
    { value: "liddy", label: "liddy" },
    { value: "ikea", label: "ikea" },
    { value: "caressa", label: "caressa" },
  ];

  function CategorySelected(category: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Box>
      <Input placeholder="Search" border="none" bg="gray.50" />
      <List color="black" fontSize="1.2em" spacing={2}>
        <Text fontWeight={500} marginTop="20px">
          Category
        </Text>
        {categories.map((category: string) => (
          <ListItem fontWeight={300} fontSize={14} color="#8b9fb3">
            <Button
              variant="link"
              _focus={{
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
              _hover={{ cursor: "pointer", textUnderlineOffset: "4px" }}
              onClick={() => CategorySelected(category)}
            >
              <Text marginRight="60px"> {category}</Text>
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
      <Flex gap={1} marginTop="12px" ml="-10px">
        <Button
          variant="link"
          _focus={{
            textDecoration: "underline",
            textUnderlineOffset: "4px",
          }}
          _hover={{ cursor: "pointer", textUnderlineOffset: "4px" }}
        >
          <Text> All </Text>
        </Button>

        {colorPicker.map((color, i) => (
          <Box borderRadius="full" borderWidth="thin">
            <Box
              key={i}
              width={5}
              height={5}
              bg={`${color}.400`}
              borderRadius="full"
              cursor="pointer"
              onClick={() => setSelectedNum(i)}
            >
              {selectedColor && (
                <Text paddingLeft={"1"} paddingTop={"-9"}>
                  {selectedNum === i ? selectedColor : null}
                </Text>
              )}
            </Box>
          </Box>
        ))}
      </Flex>
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
