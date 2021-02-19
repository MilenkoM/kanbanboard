import React from "react";
import { Card } from "./components/Card";
import { Column } from "./components/Column";
import { AppContainer } from "./components/styles";

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <AppContainer>
      <Column text="To Do">
        <Card text="generate app scafold" />
      </Column>
      <Column text="First Step">
        <Card text="once again app scafold" />
      </Column>
      <Column text="Done">
        <Card text="Neiliane" />
      </Column>
      <Column text="Em portugues de Brasil">
        <Card text="Meu chapa!" />
      </Column>
    </AppContainer>
  );
}

export default App;
