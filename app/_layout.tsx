import isDarkMode from "@/components/CheckDarkMode";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (<>
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Simple thanks" }} />
      <Tabs.Screen name="about" options={{ title: "About" }} />
    </Tabs>
    <StatusBar style={isDarkMode() ? "light" : "dark"} />
  </>
  );
}
