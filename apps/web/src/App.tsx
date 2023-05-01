import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { useColorScheme } from "./hooks/useColorScheme";
import { Building } from "./components/Building";
import { useAnimationAccessibility } from "./hooks/useAnimationAccessibility";

export const App = () => {
  useAnimationAccessibility();
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={colorScheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />

      <div></div>
    </ThemeProvider>
  );
};
