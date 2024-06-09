import { useState, useRef } from "react";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import logo_bg from "/src/assets/Game_On_banner_bg.png";
import { Genre } from "./hooks/useGenre";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import usePlatforms, { Platform } from "./hooks/usePlatforms";
import { GameQuery } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

function App() {
  const [gameQuery, setGameQuery] = useState({} as GameQuery);

  const handleSelectGenre = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };

  const handleSelectPlatform = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };

  const handleSelectSortOrder = (sortOrder: string) => {
    setGameQuery({ ...gameQuery, sortOrder });
    console.log(sortOrder);
  };
  const handleSearchText = (searchText: string) => {
    setGameQuery({ ...gameQuery, searchText });
    console.log(searchText);
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem
        area="nav"
        style={{
          backgroundImage: `url(${logo_bg})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%", // Maintain aspect ratio
          height: "100px", // Set the height
          width: "100%", // Allow width to adjust
        }}
      >
        <NavBar
          onSelectGenre={handleSelectGenre}
          selectedGenre={gameQuery.genre}
          onSearch={(searchText) => handleSearchText(searchText)}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            onSelectGenre={handleSelectGenre}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <HStack spacing={5} paddingLeft={10} paddingTop={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={handleSelectPlatform}
          />
          <SortSelector
            onSelectSortOrder={handleSelectSortOrder}
            ordering={gameQuery.sortOrder}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}
export default App;
