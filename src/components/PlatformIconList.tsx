import { HStack, Icon } from "@chakra-ui/react";
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
const iconColor: { [key: string]: string } = {
  pc: "red.600",
  playstation: "blue.300",
  xbox: "green.300",
  nintendo: "white",
  mac: "gray.50",
  linux: "orange.400",
  ios: "gray.200",
  web: "teal.100",
  android: "green.600",
};

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack marginY={1}>
      {platforms.map((plaform, idx) => (
        <Icon
          key={idx}
          as={iconMap[plaform.slug]}
          color={iconColor[plaform.slug]}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
