import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGames = () => {
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
    const controller = new AbortController();
    apiClient
      .get<FetchgamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);
  return { games, error };
};

export default useGames;
