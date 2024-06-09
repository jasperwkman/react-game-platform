import { AxiosRequestConfig } from "axios";
import useData from "./useData";
import { Genre } from "./useGenre";
import { Platform } from "./usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string | null;
}

export interface GamePlatform {
  id: number;
  name: string;
  slug: string;
}

export interface GameObject {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: GamePlatform }[];
  metacritic: number;
}

export const useGame = (gameQuery: GameQuery) => {
  return useData<GameObject>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platform: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery.genre?.id, gameQuery.platform?.id, gameQuery.sortOrder]
  );
};
