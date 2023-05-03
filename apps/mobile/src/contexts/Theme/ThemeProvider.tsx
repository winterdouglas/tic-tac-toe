import { PropsWithChildren } from "react";

import { Theme, defaultTheme } from "theme";
import { ThemeContext } from "./ThemeContext";

type ThemeProviderProps = PropsWithChildren & {
  theme?: Theme;
};

export const ThemeProvider = ({
  children,
  theme = defaultTheme,
}: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
