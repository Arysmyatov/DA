import {Grid, GridItem, Show} from '@chakra-ui/react'
import React from "react";
import NavBar from "./Components/NavBar";
import TagSummary from "./services/TagSummary";

function App() {
  return <Grid templateAreas={{
    base: '"nav" "main"',
    lg:   '"nav nav" "aside main"'
  }}>
    <GridItem area='nav'>
      <NavBar/>
    </GridItem>
    <Show above="lg">
      <GridItem area='aside' > 
        Aside
      </GridItem>
    </Show>
    <GridItem area='main' >
      <TagSummary/>
    </GridItem>
  </Grid>
}

export default App
