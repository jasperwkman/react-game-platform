import { useState, useRef } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import logo_bg from "/src/assets/Game_On_banner_bg.png";
import { Genre } from "./hooks/useGenre";
import GenreList from "./components/GenreList";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const handleSelectGenre = (genre: Genre) => {
    console.log(genre);
    setSelectedGenre(genre);
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
          selectedGenre={selectedGenre}
        />
      </GridItem>
      <Show above="lg">
        {" "}
        <GridItem area="aside">
          <GenreList
            onSelectGenre={handleSelectGenre}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}
export default App;
