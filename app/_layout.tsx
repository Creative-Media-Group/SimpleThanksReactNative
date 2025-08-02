import isDarkMode from "@/components/CheckDarkMode";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return <Tabs screenOptions={{ sceneStyle: { backgroundColor: isDarkMode() ? "black" : "white" }, headerStyle: { backgroundColor: isDarkMode() ? "black" : "white" }, tabBarStyle: { backgroundColor: isDarkMode() ? "black" : "white" }, headerTitleStyle: { color: isDarkMode() ? "white" : "black" } }}>
    <Tabs.Screen name="index" options={{ title: "Simple thanks", tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />) }} />
    <Tabs.Screen name="about" options={{ title: "About", tabBarIcon: ({ color, size }) => (<Ionicons name="information" color={color} size={size} />) }} />
  </Tabs>
    ;
}
