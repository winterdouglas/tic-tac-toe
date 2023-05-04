import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useOutfitFont } from "@/hooks/useOutfitFont";
import { ThemeProvider, useTheme } from "@/contexts/Theme";
import { Text } from "@/components/Text";

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
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colors.darkNavy }]}>
      <StatusBar style="light" />

      <Text variant="headingXS">Hi</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
