import "styled-components";

export type ColorPalette = {
  lightBlue: string;
  lightBlueHover: string;
  lightYellow: string;
  lightYellowHover: string;
  darkNavy: string;
  semiDarkNavy: string;
  silver: string;
  silverHover: string;
};

type FontWeights = {
  bold: string;
  medium: string;
};

export type Fonts = {
  outfit: FontWeights;
};

export type Theme = {
  colors: ColorPalette;
  fonts: Fonts;
};

declare module "styled-components" {
  // This is necessary to let styled-components know the theme properties
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

export const darkTheme: Theme = {
  colors: {
    lightBlue: "hsl(178, 60%, 48%)",
    lightBlueHover: "hsl(178, 75%, 65%)",
    lightYellow: "hsl(39, 88%, 58%)",
    lightYellowHover: "hsl(39, 100%, 69%)",
    darkNavy: "hsl(202, 32%, 15%)",
    semiDarkNavy: "hsl(199, 35%, 19%)",
    silver: "hsl(198, 23%, 72%)",
    silverHover: "hsl(197, 33%, 89%)",
  },

  fonts: {
    outfit: {
      bold: "Outfit-Bold",
      medium: "Outfit-Medium",
    },
  },
} as const;
