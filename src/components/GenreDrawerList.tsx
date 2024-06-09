import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Genre, useGenre } from "../hooks/useGenre";
import GenreList from "./GenreList";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreDrawerList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  return (
    <>
      <Button
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        onClick={onOpen}
        colorScheme="blue"
        ref={btnRef}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <GenreList
              onSelectGenre={onSelectGenre}
              selectedGenre={selectedGenre}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default GenreDrawerList;
