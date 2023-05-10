import { useOutfitFont } from "@/hooks/useOutfitFont";
import { ThemeProvider } from "@/contexts/Theme";
import { Text } from "@/components/Text";
import { Screen } from "@/components/Screen";
import { Button } from "@/components/Button";

export default function App() {
  const fontsLoaded = useOutfitFont();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <Screen>
        <Text preset="hxs">This is a text</Text>
        <Button preset="secondary" colorPreset="yellow" title="BUTTON 1" />
      </Screen>
    </ThemeProvider>
  );
}
