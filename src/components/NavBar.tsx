import {
  Button,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  Show,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/Game_On.png";
import ColorModeSwitch from "./ColorModeSwitch";
import GenreDrawerList from "./GenreDrawerList";
import { Genre } from "../hooks/useGenre";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
function NavBar({ onSelectGenre, selectedGenre }: Props) {
  return (
    <HStack justifyContent="space-between" alignItems={"flex-start"}>
      <Image src={logo} width="280px" height="100px"></Image>
      <HStack>
        <ColorModeSwitch />
        <Show below="lg">
          {" "}
          <GenreDrawerList
            onSelectGenre={onSelectGenre}
            selectedGenre={selectedGenre}
          />
        </Show>
      </HStack>
    </HStack>
  );
}

export default NavBar;
