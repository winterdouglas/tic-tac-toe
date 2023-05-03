import { ThemeProvider } from "styled-components";

import { defaultTheme } from "theme";
import { GlobalStyle } from "@/GlobalStyle";
import { Test } from "@/components/Test";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Test />
    </ThemeProvider>
  );
};
