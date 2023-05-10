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
  /** Size: 14, Letter Spacing: 0.8 */
  body: Size;
  /** Size: 16, Letter Spacing: 1 */
  hxs: Size;
  /** Size: 20, Letter Spacing: 1.25 */
  hs: Size;
  /** Size: 24, Letter Spacing: 1.5 */
  hm: Size;
  /** Size: 40, Letter Spacing: 2.5 */
  hl: Size;
};

export type Spaces = {
  /** Size: 1 */
  xxxs: Size;
  /** Size: 2 */
  xxs: Size;
  /** Size: 4 */
  xs: Size;
  /** Size: 8 */
  sm: Size;
  /** Size: 16 */
  md: Size;
  /** Size: 20 */
  lg: Size;
  /** Size: 24 */
  xl: Size;
  /** Size: 32 */
  xxl: Size;
  /** Size: 64 */
  xxxl: Size;
};

export type BorderRadius = {
  /** Size: 5 */
  sm: Size;
  /** Size: 10 */
  md: Size;
  /** Size: 15 */
  lg: Size;
};

export type Theme = {
  color: ColorPalette;
  font: Fonts;
  fontSize: FontConfig;
  letterSpacing: FontConfig;
  spacing: Spaces;
  borderRadius: BorderRadius;
};
