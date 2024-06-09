import { HStack, Icon, useColorMode } from "@chakra-ui/react";
import { GamePlatform } from "../hooks/useGames";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: GamePlatform[];
}
const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  web: BsGlobe,
  android: FaAndroid,
};

interface ThemeColors {
  light: string;
  dark: string;
}
const iconColor: { [key: string]: ThemeColors } = {
  pc: { light: "red.600", dark: "red.600" },
  playstation: { light: "blue.300", dark: "blue.300" },
  xbox: { light: "green.300", dark: "green.300" },
  nintendo: { light: "black", dark: "white" },
  mac: { light: "black", dark: "gray.50" },
  linux: { light: "orange.400", dark: "orange.400" },
  ios: { light: "black", dark: "gray.200" },
  web: { light: "teal.100", dark: "teal.100" },
  android: { light: "green.600", dark: "green.600" },
};

const PlatformIconList = ({ platforms }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <HStack
      marginY={1}
      borderRadius="5px"
      background={colorMode === "dark" ? "gray.600" : "blue.100"}
      width="100%"
      padding="5px"
    >
      {platforms.map((plaform, idx) => (
        <Icon
          key={idx}
          boxSize={6}
          as={iconMap[plaform.slug]}
          color={
            colorMode === "dark"
              ? iconColor[plaform.slug].dark
              : iconColor[plaform.slug].light
          }
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
