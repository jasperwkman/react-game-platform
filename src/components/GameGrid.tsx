import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

function GameGrid() {
  const [games, setGames] = useState<GameObject[]>([]);
  const [error, setError] = useState("");

  interface GameObject {
    id: number;
    name: string;
  }
  interface FetchgamesResponse {
    count: number;
    results: GameObject[];
  }
  useEffect(() => {
    apiClient
      .get<FetchgamesResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => setError(err.message));
  }, []);
  return (
    <ul>
      {error && <text>{error}</text>}
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
}

export default GameGrid;
