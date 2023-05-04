import { useCallback } from "react";
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export const useAnimatedBackgroundStyle = (
  colorStart: string,
  colorEnd: string
) => {
  const progress = useSharedValue(0);

  const animateTo = useCallback(
    (to: number) => {
      progress.value = withSpring(to);
    },
    [progress]
  );

  const onPressIn = useCallback(() => {
    animateTo(1);
  }, [animateTo]);

  const onPressOut = useCallback(() => {
    animateTo(0);
  }, [animateTo]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [colorStart, colorEnd]
      ),
    };
  });

  return { animatedStyle, animateTo, onPressIn, onPressOut };
};
