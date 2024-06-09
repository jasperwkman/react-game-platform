import { GameObject } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import No_Image_Available from "../assets/No_Image_Available.jpg";

interface Props {
  game: GameObject;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={
          game.background_image
            ? game.background_image.replace(
                "media/games",
                "media/crop/600/400/games"
              )
            : No_Image_Available
        }
      />
      <CardBody paddingTop={-3}>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
