import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router";
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useColorScheme } from "react-native";
import { i18n } from "../utils/mylocalisation";

export default function RootLayout() {
  let title = i18n.t("title")
  let about = i18n.t("about")
  const colorScheme = useColorScheme()
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <NativeTabs blurEffect="systemDefault">
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Label>{title}</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="about">
          <NativeTabs.Trigger.Icon sf="info" md="info" />
          <NativeTabs.Trigger.Label>{about}</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    </ThemeProvider>
  )
    ;
}
