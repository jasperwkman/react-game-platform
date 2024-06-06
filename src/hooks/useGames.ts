import { AxiosRequestConfig } from "axios";
import useData from "./useData";

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
  requestConfig?: AxiosRequestConfig | null,
  deps?: any[]
) => {
  return useData<GameObject>("/games", requestConfig, deps);
};
