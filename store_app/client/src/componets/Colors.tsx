import { Button, Flex, Text, Box } from "@chakra-ui/react";
import React from "react";
import { colorPicker } from "../helperfunctions/color";
interface SelectedType {
  selectedNum: number | string;
  selectedColor: string;
  setSelectedNum: (selectedNum: number | string) => void;
}
function Colors({ selectedColor, selectedNum, setSelectedNum }: SelectedType) {
  return (
    <Flex gap={1} marginTop="12px" ml="-10px">
      <Button
        variant="link"
        _focus={{
          textDecoration: "underline",
          textUnderlineOffset: "4px",
        }}
        _hover={{ cursor: "pointer", textUnderlineOffset: "4px" }}
      >
        {colorPicker[0]}
      </Button>
      {colorPicker.slice(1).map((color, i) => (
        <Box
          key={i}
          width={5}
          height={5}
          bg={`${color}.400`}
          borderRadius="full"
          cursor="pointer"
          onClick={() => setSelectedNum(i)}
        >
          {" "}
          {selectedColor && (
            <Text paddingLeft={"1"} paddingTop={"-9"}>
              {selectedNum === i ? selectedColor : null}
            </Text>
          )}
        </Box>
      ))}
    </Flex>
  );
}

export default Colors;
