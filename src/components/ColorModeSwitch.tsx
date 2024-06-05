import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text color="rgb(56, 130, 171)" as="b" paddingRight={15}>
        Dark Mode
      </Text>
    </HStack>
  );
}

export default ColorModeSwitch;
