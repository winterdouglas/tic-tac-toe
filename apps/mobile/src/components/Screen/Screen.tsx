import {
  SafeAreaView,
  StyleProp,
  StyleSheet,
  ViewProps,
  ViewStyle,
} from "react-native";
import { StatusBar, StatusBarProps } from "expo-status-bar";

import { useTheme } from "@/contexts/Theme";

export type ScreenProps = ViewProps & {
  statusBarStyle?: StatusBarProps["style"];
};

export const Screen = ({
  statusBarStyle = "auto",
  children,
  ...props
}: ScreenProps) => {
  const { color } = useTheme();

  const containerStyle: StyleProp<ViewStyle> = [
    styles.safeArea,
    { backgroundColor: color.darkNavy },
  ];

  return (
    <SafeAreaView {...props} style={containerStyle}>
      <StatusBar style={statusBarStyle} />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
