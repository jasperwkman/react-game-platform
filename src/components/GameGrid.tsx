import useGames from "../hooks/useGames";
import { Text } from "@chakra-ui/react";
function GameGrid() {
  const { games, error } = useGames();
  return (
    <ul>
      {error && <Text>{error}</Text>}
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
}
export default GameGrid;
