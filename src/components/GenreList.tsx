import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Genre, useGenre } from "../hooks/useGenre";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const [bgColor1, setbgColor1] = useState("");
  const [bgColor2, setbgColor2] = useState("");
  const { data, error, isLoading } = useGenre();
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "light") {
      setbgColor1("white");
      setbgColor2("gray.100");
    } else {
      setbgColor1("gray.800");
      setbgColor2("gray.900");
    }
  }, [colorMode]);

  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre, idx) => (
        <ListItem
          key={genre.id}
          paddingY="0px"
          margin="5px"
          bg={idx % 2 === 0 ? bgColor1 : bgColor2}
        >
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            />
            <Button
              key={idx}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              color={
                genre.id === selectedGenre?.id ? "blue.500" : "theme.colors"
              }
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
