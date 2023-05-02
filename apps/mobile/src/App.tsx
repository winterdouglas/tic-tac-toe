import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import { Button } from "game-core";
import { darkTheme } from "theme";
import { useOutfitFont } from "./hooks/useOutfitFont";

export default function App() {
  const fontsLoaded = useOutfitFont();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <SafeAreaView style={[styles.safeArea]}>
        <StatusBar style="auto" />

        <Button />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
