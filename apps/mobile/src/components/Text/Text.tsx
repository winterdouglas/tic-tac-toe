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
  const { colors, fontSizes, letterSpacings, fonts } = useTheme();

  const style: StyleProp<TextStyle> = [
    {
      fontFamily: ["body", "base"].includes(variant)
        ? fonts.outfit.medium
        : fonts.outfit.bold,
      fontSize: fontSizes[variant] as number,
      letterSpacing: letterSpacings[variant] as number,
      color: colors.silver,
    },
    $styleOverride,
  ];

  return (
    <RNText {...props} style={style}>
      {children}
    </RNText>
  );
};
