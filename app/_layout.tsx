import isDarkMode from "@/components/CheckDarkMode";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (<>
    <Stack>
      <Stack.Screen name="index" options={{ title: "Simple thanks" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
    </Stack>
    <StatusBar style={isDarkMode() ? "light" : "dark"} />
  </>
  );
}
