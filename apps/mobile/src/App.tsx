import { SafeAreaView, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useOutfitFont } from "@/hooks/useOutfitFont";
import { ThemeProvider, useTheme } from "@/contexts/Theme";

export default function App() {
  const fontsLoaded = useOutfitFont();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <Wrapper />
    </ThemeProvider>
  );
}

const Wrapper = () => {
  const { colors, fontSizes, letterSpacings, fonts } = useTheme();

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colors.darkNavy }]}>
      <StatusBar style="auto" />

      <Text
        style={{
          fontFamily: fonts.outfit.bold,
          fontSize: fontSizes.headingL,
          letterSpacing: letterSpacings.headingL,
          color: colors.silver,
        }}>
        Hi
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
