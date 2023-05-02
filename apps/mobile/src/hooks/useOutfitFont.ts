import { useFonts } from "expo-font";

export const useOutfitFont = () => {
  const [fontsLoaded] = useFonts({
    "Outfit-Bold": require("../../../../assets/fonts/Outfit-Bold.ttf"),
    "Outfit-Medium": require("../../../../assets/fonts/Outfit-Medium.ttf"),
  });

  //   const onLayoutRootView = useCallback(async () => {
  //     if (fontsLoaded) {
  //       await SplashScreen.hideAsync();
  //     }
  //   }, [fontsLoaded]);

  return fontsLoaded;
};
