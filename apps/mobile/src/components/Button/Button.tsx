import {
  Pressable,
  PressableProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import Animated from "react-native-reanimated";

import { changeHslStringLightness } from "utils";
import { useTheme } from "@/contexts/Theme";
import { Text } from "@/components/Text";
import { useAnimatedBackgroundStyle } from "@/hooks/useAnimatedBackgroundStyle";
import { Theme } from "theme";

export type ButtonProps = Omit<PressableProps, "children"> & {
  preset?: "primary" | "secondary";

  colorPreset?: "blue" | "yellow" | "silver";

  /** The text to be displayed */
  title?: string;

  /** Text style to be overriden */
  textStyle?: StyleProp<TextStyle>;

  /** Override for the pressable style, hides the function signature */
  style?: StyleProp<ViewStyle>;
};

export const Button = ({
  preset = "primary",
  colorPreset = "yellow",
  title,
  style: $styleOverride,
  textStyle: $textStyleOverride,
  ...props
}: ButtonProps) => {
  const theme = useTheme();

  const $colorPreset = $colorPresets(theme)[colorPreset];

  const { animatedStyle, onPressIn, onPressOut } = useAnimatedBackgroundStyle(
    $colorPreset.regular,
    $colorPreset.hover
  );

  const $pressableStyles: StyleProp<ViewStyle> = [
    $containerPresets(theme)[preset],
    {
      backgroundColor: changeHslStringLightness($colorPreset.regular, -20),
    },
    $styleOverride,
  ];

  const $contentContainerStyles: StyleProp<ViewStyle> = [
    $contentContainerStyle,
    $contentContainerPresets(theme)[preset],
    animatedStyle,
  ];

  const $textPreset = $textPresets[preset];
  const $textStyles: StyleProp<TextStyle> = [
    $textStyle,

    // The text color is the only one that doesn't change
    { color: theme.color.darkNavy },
    $textStyleOverride,
  ];

  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      {...props}
      style={$pressableStyles}>
      <Animated.View style={$contentContainerStyles}>
        <Text preset={$textPreset} style={$textStyles}>
          {title}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

const $containerPresets = ({ borderRadius, spacing }: Theme) => ({
  primary: {
    borderRadius: borderRadius.lg,

    // This is the inner "shadow" size
    paddingBottom: spacing.sm,
  } as StyleProp<ViewStyle>,

  secondary: {
    borderRadius: borderRadius.md,

    // This is the inner "shadow" size
    paddingBottom: spacing.xs,
  } as StyleProp<ViewStyle>,
});

const $contentContainerStyle: StyleProp<ViewStyle> = {
  alignItems: "center",
};

const $contentContainerPresets = ({ borderRadius, spacing }: Theme) => ({
  primary: {
    borderRadius: borderRadius.lg as number,
    padding: spacing.md,
  } as StyleProp<ViewStyle>,

  secondary: {
    borderRadius: borderRadius.md as number,
    padding: (spacing.md as number) - (spacing.xs as number),
  } as StyleProp<ViewStyle>,
});

const $textStyle: TextStyle = {
  textTransform: "uppercase",
};

const $textPresets = {
  primary: "hs" as const,
  secondary: "hxs" as const,
};

const $colorPresets = (theme: Theme) => ({
  blue: {
    regular: theme.color.lightBlue,
    hover: theme.color.lightBlueHover,
  },
  yellow: {
    regular: theme.color.lightYellow,
    hover: theme.color.lightYellowHover,
  },
  silver: {
    regular: theme.color.silver,
    hover: theme.color.silverHover,
  },
});
