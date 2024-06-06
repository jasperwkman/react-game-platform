import {
  Button,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/Game_On.png";
import ColorModeSwitch from "./ColorModeSwitch";
import GenreDrawerList from "./GenreDrawerList";
function NavBar() {
  return (
    <HStack justifyContent="space-between" alignItems={"flex-start"}>
      <Image src={logo} width="280px" height="100px"></Image>
      <HStack>
        <ColorModeSwitch />
        <GenreDrawerList />
      </HStack>
    </HStack>
  );
}

export default NavBar;
