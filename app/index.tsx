import CustomButton from "@/components/CustomButton";
import { Alert, Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
;
export default function Index() {
  const styles = StyleSheet.create({
    bg: {
      flex: 1, resizeMode: "cover",
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height
    },
    topview: { flex: 1, justifyContent: "center", alignItems: "center" },
    bottomview: { flex: 1, width: "100%", justifyContent: "flex-end", gap: 10, padding: 10, alignContent: "center" },
    title: { flex: 1, fontSize: 50, fontWeight: "bold" }, //color: isDarkMode() ? "#fff" : "#000"
    safeareaview: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }
  },
  )
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View>
        <View style={styles.topview}>
          <Text style={[styles.title]}>Thanks ...</Text></View>
        <View style={styles.bottomview}>
          <CustomButton onPress={() => Alert.alert("Hello", "Message")} title="Happy Birthday"></CustomButton>
          <CustomButton onPress={() => Alert.alert("Hello", "Message")} title="Happy Mothersday"></CustomButton>
        </View>
      </View>
    </SafeAreaView>
  );
}
