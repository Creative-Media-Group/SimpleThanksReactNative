import isDarkMode from "@/components/CheckDarkMode";
import { i18n } from "@/utils/mylocalisation";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  var title = i18n.t("title")
  var about = i18n.t("about")
  return <Tabs screenOptions={{ sceneStyle: { backgroundColor: isDarkMode() ? "black" : "white" }, headerStyle: { backgroundColor: isDarkMode() ? "black" : "white" }, tabBarStyle: { backgroundColor: isDarkMode() ? "black" : "white" }, headerTitleStyle: { color: isDarkMode() ? "white" : "black" } }}>
    <Tabs.Screen name="index" options={{ title: title, tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />) }} />
    <Tabs.Screen name="about" options={{ title: about, tabBarIcon: ({ color, size }) => (<Ionicons name="information" color={color} size={size} />) }} />
  </Tabs>
    ;
}
