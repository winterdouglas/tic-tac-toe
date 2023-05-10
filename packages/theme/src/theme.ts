import "styled-components";

import { PlatformResolver } from "utils";
import { Size, Theme } from "./types";

declare module "styled-components" {
  // This is necessary to let styled-components know the theme properties
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

export const defaultTheme: Theme = {
  color: {
    lightBlue: "hsl(178, 60%, 48%)",
    lightBlueHover: "hsl(178, 75%, 65%)",
    lightYellow: "hsl(39, 88%, 58%)",
    lightYellowHover: "hsl(39, 100%, 69%)",
    darkNavy: "hsl(202, 32%, 15%)",
    semiDarkNavy: "hsl(199, 35%, 19%)",
    silver: "hsl(198, 23%, 72%)",
    silverHover: "hsl(197, 33%, 89%)",
  },

  font: {
    outfit: {
      bold: "Outfit-Bold",
      medium: "Outfit-Medium",
    },
  },

  fontSize: {
    body: PlatformResolver.resolve<Size>({ web: "0.875rem", mobile: 14 }),
    hxs: PlatformResolver.resolve<Size>({ web: "1rem", mobile: 16 }),
    hs: PlatformResolver.resolve<Size>({ web: "1.25rem", mobile: 20 }),
    hm: PlatformResolver.resolve<Size>({ web: "1.5rem", mobile: 24 }),
    hl: PlatformResolver.resolve<Size>({ web: "2.5rem", mobile: 40 }),
  },

  letterSpacing: {
    body: PlatformResolver.resolve<Size>({ web: "0.0625em", mobile: 0.875 }),
    hxs: PlatformResolver.resolve<Size>({ web: "0.0625em", mobile: 1 }),
    hs: PlatformResolver.resolve<Size>({ web: "0.0625em", mobile: 1.25 }),
    hm: PlatformResolver.resolve<Size>({ web: "0.0625em", mobile: 1.5 }),
    hl: PlatformResolver.resolve<Size>({ web: "0.0625em", mobile: 2.5 }),
  },

  spacing: {
    xxxs: PlatformResolver.resolve<Size>({ web: "0.0625rem", mobile: 1 }),
    xxs: PlatformResolver.resolve<Size>({ web: "0.125rem", mobile: 2 }),
    xs: PlatformResolver.resolve<Size>({ web: "0.25rem", mobile: 4 }),
    sm: PlatformResolver.resolve<Size>({ web: "0.5rem", mobile: 8 }),
    md: PlatformResolver.resolve<Size>({ web: "1rem", mobile: 16 }),
    lg: PlatformResolver.resolve<Size>({ web: "1.25rem", mobile: 20 }),
    xl: PlatformResolver.resolve<Size>({ web: "1.5rem", mobile: 24 }),
    xxl: PlatformResolver.resolve<Size>({ web: "2rem", mobile: 32 }),
    xxxl: PlatformResolver.resolve<Size>({ web: "4rem", mobile: 64 }),
  },

  borderRadius: {
    sm: PlatformResolver.resolve<Size>({ web: "5px", mobile: 5 }),
    md: PlatformResolver.resolve<Size>({ web: "10px", mobile: 10 }),
    lg: PlatformResolver.resolve<Size>({ web: "15px", mobile: 15 }),
  },
} as const;
