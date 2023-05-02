import { Platform, View, Text } from "react-native";
import { useTheme } from "styled-components";

const padding = Platform.select({
  web: "5rem",
  default: "16",
});

export const Button = () => {
  const { colors, fonts } = useTheme();

  return (
    <View style={{ padding }}>
      <Text
        style={{
          fontFamily: fonts.outfit.bold,
          color: colors.silver,
          fontSize: 50,
        }}>
        Hello!
      </Text>
    </View>
  );
};
