import CustomButton from "@/components/CustomButton";
import { Alert, Dimensions, StyleSheet, Text, useColorScheme, View } from "react-native";

export default function Index() {
  const colorscheme = useColorScheme()
  const isdarkmode = colorscheme == "dark"
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isdarkmode ? "#000" : "#fff",
      }}
    >
      <View style={styles.topview}>
        <Text style={[styles.title, { color: isdarkmode ? "#fff" : "#000" }]}>Thanks ...</Text></View>
      <View style={styles.bottomview}><CustomButton onPress={() => Alert.alert("Hello", "Message")} title="Hello"></CustomButton></View>
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