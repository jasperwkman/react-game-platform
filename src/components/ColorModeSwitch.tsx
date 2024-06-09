import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        paddingTop={15}
      />
      <Text
        color="rgb(56, 130, 171)"
        as="b"
        paddingTop={15}
        whiteSpace="nowrap"
      >
        Dark Mode
      </Text>
    </HStack>
  );
}

export default ColorModeSwitch;
