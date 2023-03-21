import { ChevronDownIcon } from "@chakra-ui/icons";
import { categories } from "../helperfunctions/categories";
import {
  Spacer,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
} from "@chakra-ui/react";
import {
  Box,
  Checkbox,
  Input,
  List,
  ListItem,
  Radio,
  Select,
  Text,
} from "@chakra-ui/react";

function Sidebar() {
  return (
    <Box>
      <Input placeholder="Search" border="none" bg="gray.50" />
      <List color="black" fontSize="1.2em" spacing={2}>
        <Text fontWeight={500} marginTop="20px">
          Category
        </Text>
        <ListItem color="#859baf" fontWeight={300} fontSize={14}></ListItem>
        <ListItem fontWeight={200} fontSize={14}>
          asdsa
        </ListItem>
        <ListItem fontWeight={200} fontSize={14}>
          asdsa
        </ListItem>
        <ListItem fontWeight={200} fontSize={14}>
          asdsa
        </ListItem>
        <ListItem fontWeight={200} fontSize={14}>
          asdsa
        </ListItem>

        <ListItem fontWeight={200} fontSize={14}>
          asdsa
        </ListItem>
        <ListItem fontWeight={200} fontSize={14}>
          asdsa
        </ListItem>
      </List>
      <Text fontWeight={500} marginTop="20px">
        Company
      </Text>
      <Select
        icon={<ChevronDownIcon />}
        variant="filled"
        placeholder="all"
        w="110px"
        fontSize={12}
        fontWeight="400"
        marginTop="12px"
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Text fontWeight={500} marginTop="20px">
        Colors
      </Text>
      <Flex gap={2} marginTop="12px">
        <Checkbox variant="circular" colorScheme="red"></Checkbox>
        <Checkbox variant="circular" colorScheme="red"></Checkbox>
        <Checkbox variant="circular" colorScheme="red"></Checkbox>
        <Checkbox variant="circular" colorScheme="red"></Checkbox>
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
