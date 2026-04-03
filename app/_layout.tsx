import IsDarkMode from "@/components/CheckDarkMode";
import { i18n } from "@/utils/mylocalisation";
import { NativeTabs } from 'expo-router/unstable-native-tabs';
export default function RootLayout() {
  let title = i18n.t("title")
  let about = i18n.t("about")
  return <NativeTabs backgroundColor={IsDarkMode() ? "black" : "white"}>
    <NativeTabs.Trigger name="index">
      <NativeTabs.Trigger.Label>{title}</NativeTabs.Trigger.Label>
      <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
    </NativeTabs.Trigger>
    <NativeTabs.Trigger name="about">
      <NativeTabs.Trigger.Icon sf="info" md="info" />
      <NativeTabs.Trigger.Label>{about}</NativeTabs.Trigger.Label>
    </NativeTabs.Trigger>
  </NativeTabs>
    ;
}
