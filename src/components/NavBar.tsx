import { HStack, Image, Text } from "@chakra-ui/react";
import naruto from "../assets/naruto-square.png";
function NavBar() {
  return (
    <HStack>
      <Image src={naruto} boxSize="60px"></Image>
      <Text fontSize="3xl" color="tomato">
        Naruto
      </Text>
    </HStack>
  );
}

export default NavBar;
