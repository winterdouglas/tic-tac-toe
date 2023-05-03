import "styled-components";

import { PlatformResolver } from "utils";
import { Size, Theme } from "./types";

declare module "styled-components" {
  // This is necessary to let styled-components know the theme properties
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

export const defaultTheme: Theme = {
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

  fontSizes: {
    root: PlatformResolver.resolve<Size>({ web: "16px", mobile: 16 }),
    body: PlatformResolver.resolve<Size>({ web: "0.875rem", mobile: 14 }),
    headingXS: PlatformResolver.resolve<Size>({ web: "1rem", mobile: 16 }),
    headingS: PlatformResolver.resolve<Size>({ web: "1.25rem", mobile: 20 }),
    headingM: PlatformResolver.resolve<Size>({ web: "1.5rem", mobile: 24 }),
    headingL: PlatformResolver.resolve<Size>({ web: "2.5rem", mobile: 40 }),
  },

  letterSpacings: {
    root: PlatformResolver.resolve<Size>({ web: "1px", mobile: 1 }),
    body: PlatformResolver.resolve<Size>({ web: "0.0625em", mobile: 0.875 }),
    headingXS: PlatformResolver.resolve<Size>({ web: "0.0625em", mobile: 1 }),
    headingS: PlatformResolver.resolve<Size>({ web: "0.0625em", mobile: 1.25 }),
    headingM: PlatformResolver.resolve<Size>({ web: "0.0625em", mobile: 1.5 }),
    headingL: PlatformResolver.resolve<Size>({ web: "0.0625em", mobile: 2.5 }),
  },
} as const;
