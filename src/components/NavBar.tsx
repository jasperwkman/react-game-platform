import { HStack, Image, Text } from "@chakra-ui/react";
import naruto from "../assets/naruto-square.png";
import ColorModeSwitch from "./ColorModeSwitch";
function NavBar() {
  return (
    <HStack justifyContent="space-between">
      <div style={{ display: "flex", alignItems: "left" }}>
        <Image src={naruto} boxSize="60px"></Image>
        <Text fontSize="3xl" color="tomato">
          Naruto
        </Text>
      </div>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
