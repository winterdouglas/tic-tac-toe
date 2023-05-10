import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  TextStyle,
} from "react-native";

import { FontConfig } from "theme";
import { useTheme } from "@/contexts/Theme";

type Variant = keyof FontConfig;

export type TextProps = RNTextProps & {
  variant?: Variant;
};

export const Text = ({
  variant = "body",
  style: $styleOverride,
  children,
  ...props
}: TextProps) => {
  const { color, fontSize, letterSpacing, font } = useTheme();

  const style: StyleProp<TextStyle> = [
    {
      fontFamily: variant === "body" ? font.outfit.medium : font.outfit.bold,
      fontSize: fontSize[variant] as number,
      letterSpacing: letterSpacing[variant] as number,
      color: color.silver,
    },
    $styleOverride,
  ];

  return (
    <RNText {...props} style={style}>
      {children}
    </RNText>
  );
};
