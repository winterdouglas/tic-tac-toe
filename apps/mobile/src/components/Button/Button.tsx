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

export type ButtonProps = Omit<PressableProps, "children"> & {
  /** The text to be displayed */
  title?: string;

  /** Text style to be overriden */
  textStyle?: StyleProp<TextStyle>;

  /** Override for the pressable style, hides the function signature */
  style?: StyleProp<ViewStyle>;
};

export const Button = ({
  title,
  style: $styleOverride,
  textStyle: $textStyleOverride,
  ...props
}: ButtonProps) => {
  const { borderRadius, spacing, color } = useTheme();
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedBackgroundStyle(
    color.lightYellow,
    color.lightYellowHover
  );

  const $pressableStyles: StyleProp<ViewStyle> = [
    {
      borderRadius: borderRadius.lg as number,
      backgroundColor: changeHslStringLightness(color.lightYellow, -15),
    },
    $styleOverride,
  ];

  const $contentContainerStyles: StyleProp<ViewStyle> = [
    {
      backgroundColor: color.silver,
      borderRadius: borderRadius.lg as number,
      padding: spacing.md,
      marginBottom: spacing.sm,
    },
    animatedStyle,
  ];

  const $textStyles: StyleProp<TextStyle> = [
    $textStyle,
    { color: color.darkNavy },
    $textStyleOverride,
  ];

  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      {...props}
      style={$pressableStyles}>
      <Animated.View style={$contentContainerStyles}>
        <Text variant="hxs" style={$textStyles}>
          {title}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

const $textStyle: TextStyle = {
  textTransform: "uppercase",
};
