import { AxiosRequestConfig } from "axios";
import useData from "./useData";
import { Genre } from "./useGenre";
import { Platform } from "./usePlatforms";

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

export const useGame = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  return useData<GameObject>(
    "/games",
    {
      params: { genres: selectedGenre?.id, platform: selectedPlatform?.id },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );
};
