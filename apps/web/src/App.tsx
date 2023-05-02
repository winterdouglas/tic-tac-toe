import { ThemeProvider } from "styled-components";

import { Button } from "game-core";
import { darkTheme } from "theme";

import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />

      <Button />
    </ThemeProvider>
  );
};
