import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import { useGame } from "../hooks/useGames";

interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: GamePlatform }[];
  metacritic: number;
}

interface Props {
  selectedGenre: Genre | null;
}
export interface GamePlatform {
  id: number;
  name: string;
  slug: string;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGame(
    {
      params: { genres: selectedGenre?.id },
    },
    selectedGenre ? [selectedGenre.id] : []
  );
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={3}
      >
        {isLoading &&
          [...Array(6).keys()].map((i) => (
            <GameCardContainer key={i}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((d) => (
          <GameCardContainer key={d.id}>
            <GameCard game={d} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
