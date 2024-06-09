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
import SearchInput from "./SearchInput";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
  onSearch: (searchText: string) => void;
}
function NavBar({ onSelectGenre, selectedGenre, onSearch }: Props) {
  return (
    <HStack alignItems={"flex-start"}>
      <Image src={logo} width="240px" height="100px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
      <HStack paddingRight="5px" paddingTop="5px">
        <Show below="lg">
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
