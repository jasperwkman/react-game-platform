import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import useData from "../hooks/useData";
import { useEffect, useState } from "react";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const GenreList = () => {
  const [bgColor1, setbgColor1] = useState("");
  const [bgColor2, setbgColor2] = useState("");
  const { data, error, isLoading } = useData<Genre>("/genres");
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
          bg={idx % 2 === 0 ? bgColor1 : bgColor2}
        >
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
