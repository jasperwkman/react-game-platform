import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Game_On.png";
import logo_bg from "../assets/Game_On_banner_bg.png";
import ColorModeSwitch from "./ColorModeSwitch";
function NavBar() {
  return (
    <HStack justifyContent="space-between">
      <div>
        <Image src={logo} width="280px" height="100px"></Image>
      </div>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
