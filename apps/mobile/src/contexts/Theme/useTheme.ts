import { useContext } from "react";

import { ThemeContext } from "./ThemeContext";

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("useTheme can only be used within the ThemeContext!");
  }

  return theme;
};
