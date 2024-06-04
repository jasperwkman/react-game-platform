import { useState, useRef } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Alert from "./Alert";
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  const [pilots, setPilots] = useState<string[]>([]);
  const newPilotInputRef = useRef<HTMLInputElement>(null);

  const gundamSeedList = [
    "GAT-X102 Duel Gundam Assault Shroud (R02)",
    "GAT-X207 Blitz Gundam (R04)",
    "ZGMF-1017 Mobile GINN (R06)",
    "GAT-X131 Calamity Gundam (R08)",
    "GAT-X370 Raider Gundam (R10)",
    "TMF/A-802 BuCUE (R12)",
    "ZGMF-X09A Justice Gundam (R14)",
    "MBF-M1 M1 Astray (R16)",
  ];
  const wingGundamList = [
    "XXXG-01W Wing Gundam (Gundam Zero-One)",
    "XXXG-01D Gundam Deathscythe / XXXG-01D2 Gundam Deathscythe Hell (Gundam Zero-Two)",
    "XXXG-01H Gundam Heavyarms (Gundam Zero-Three)",
    "XXXG-01SR Gundam Sandrock (Gundam Zero-Four)",
    "XXXG-01S Shenlong Gundam / XXXG-01S2 Altron Gundam (Gundam Zero-Five)",
  ];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      {false && <Alert>Hello</Alert>}
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="black">
          <NavBar />
        </GridItem>
        <Show above="lg">
          {" "}
          <GridItem area="aside">
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
      {/* <NavBarOld
        pilots={pilots}
        onClear={() => {
          setPilots([]);
        }}
        onAppend={(newPilotName: string) => {
          setPilots([...pilots, newPilotName]);
        }}
        newPilotInputRef={newPilotInputRef}
      ></NavBarOld> */}
      {/* <ListGroup
        names={gundamSeedList}
        heading="Gundame Seed"
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        names={wingGundamList}
        heading="Wing Gundame"
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}
export default App;
