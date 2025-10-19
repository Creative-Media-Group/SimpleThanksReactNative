import IsDarkMode from "@/components/CheckDarkMode";
import { i18n } from "@/utils/mylocalisation";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  let title = i18n.t("title")
  let about = i18n.t("about")
  return <Tabs
    screenOptions={{
      sceneStyle: {
        backgroundColor: IsDarkMode() ? "black" : "white"
      },
      headerStyle: {
        backgroundColor: IsDarkMode() ? "black" : "white"
      },
      tabBarStyle: {
        backgroundColor: IsDarkMode() ? "black" : "white"
      },
      headerTitleStyle: {
        color: IsDarkMode() ? "white" : "black"
      }
    }}>
    <Tabs.Screen name="index" options={{ title: title, tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />) }} />
    <Tabs.Screen name="about" options={{ title: about, tabBarIcon: ({ color, size }) => (<Ionicons name="information" color={color} size={size} />) }} />
  </Tabs>
    ;
}
