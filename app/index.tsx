import isDarkMode from "@/components/CheckDarkMode";
import CustomButton from "@/components/CustomButton";
import { i18n } from "@/utils/mylocalisation";
import { Alert, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const text = i18n.t("text");
  const { width, height } = useWindowDimensions();
  const isDark = isDarkMode();

  const styles = StyleSheet.create({
    bg: {
      flex: 1,
      resizeMode: "cover",
      width: width,
      height: height,
    },
    topview: {
      flex: 1,
      alignItems: "center",
    },
    bottomview: {
      flex: 1,
      width: "100%",
      gap: 10,
      paddingEnd: 10,
    },
    title: {
      flex: 1,
      fontSize: 50,
      fontWeight: "bold",
      color: isDark ? "white" : "black",
    },
    safeareaview: {
      flex: 1,
    },
  });

  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.topview}>
        <Text style={styles.title}>{text}</Text>
      </View>
      <ScrollView style={styles.bottomview} contentContainerStyle={{ gap: 10, padding: 10 }}>
        <CustomButton onPress={() => Alert.alert("Hello", "Message")} title="Happy Birthday" />
        <CustomButton onPress={() => Alert.alert("Hello", "Message")} title="Happy Mothersday" />
        <CustomButton onPress={() => Alert.alert("Hello", "Message")} title="Happy Birthday" />
        <CustomButton onPress={() => Alert.alert("Hello", "Message")} title="Happy Birthday" />
        <CustomButton onPress={() => Alert.alert("Hello", "Message")} title="Happy Birthday" />
      </ScrollView>
    </SafeAreaView>
  );
}
