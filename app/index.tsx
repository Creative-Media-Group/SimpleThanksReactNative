import AppBarComponent from "@/components/AppBarComponent";
import isDarkMode from "@/components/CheckDarkMode";
import CustomButton from "@/components/CustomButton";
import { Alert, Dimensions, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode() ? "#000" : "#fff",
      }}
    >
      <AppBarComponent title="Simple Thanks" />
      <View style={styles.topview}>
        <Text style={[styles.title, { color: isDarkMode() ? "#fff" : "#000" }]}>Thanks ...</Text></View>
      <View style={styles.bottomview}>
        <CustomButton onPress={() => Alert.alert("Hello", "Message")} title="Hello"></CustomButton>
        <CustomButton onPress={() => Alert.alert("Hello", "Message")} title="Hello"></CustomButton>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: {
    flex: 1, resizeMode: "cover",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  topview: { flex: 1, justifyContent: "center", alignItems: "center" },
  bottomview: { flex: 1, width: "100%", justifyContent: "center" },
  title: { flex: 1, fontSize: 50, fontWeight: "bold" },
}
)