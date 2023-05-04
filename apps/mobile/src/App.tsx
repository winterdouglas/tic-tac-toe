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
        <Text variant="headingXS">This is a text</Text>
        <Button title="This is a button" />
      </Screen>
    </ThemeProvider>
  );
}
