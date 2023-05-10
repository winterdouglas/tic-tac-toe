import { ThemeProvider } from "styled-components";

import { defaultTheme } from "theme";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { Text } from "@/components/Text";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Text preset="hl" disabled={false}>
        Hello again!
      </Text>
    </ThemeProvider>
  );
};
