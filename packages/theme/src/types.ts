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

export type FontWeights = {
  bold: string;
  medium: string;
};

export type Fonts = {
  outfit: FontWeights;
};

export type Size = string | number;

export type FontConfig = {
  base: Size;
  body: Size;
  headingXS: Size;
  headingS: Size;
  headingM: Size;
  headingL: Size;
};

export type Theme = {
  colors: ColorPalette;
  fonts: Fonts;
  fontSizes: FontConfig;
  letterSpacings: FontConfig;
};
