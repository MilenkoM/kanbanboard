import React from "react";
import { Column } from "./components/Column";
import { Card } from "./components/Card";
import { AppContainer } from "./components/styles";

function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="generate app scafold" />
      </Column>
      <Column text="First Step">
        <Card text="generate app scafold" />
      </Column>
      <Column text="Done">
        <Card text="generate app scafold" />
      </Column>
      <Column text="Em portugues de Brasil">
        <Card text="Meu chapa!" />
      </Column>
    </AppContainer>
  );
}

export default App;
