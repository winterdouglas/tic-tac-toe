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

type PlatformValue = {
  web: string;
  mobile: number;
};

export type FontConfig = {
  root: PlatformValue;
  body: PlatformValue;
  headingXS: PlatformValue;
  headingS: PlatformValue;
  headingM: PlatformValue;
  headingL: PlatformValue;
};

export type Theme = {
  colors: ColorPalette;
  fonts: Fonts;
  fontSizes: FontConfig;
  letterSpacing: FontConfig;
};
