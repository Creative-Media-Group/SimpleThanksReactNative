import isDarkMode from "@/components/CheckDarkMode";
import CustomButton from "@/components/CustomButton";
import { i18n } from "@/utils/mylocalisation";
import { useAudioPlayer } from "expo-audio";
import * as Device from 'expo-device';
import * as Linking from 'expo-linking';
import { Alert, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const platform = Device.osName?.toLowerCase();
function myalert(title: string, message: string) {
  if (platform === "android") {
    Alert.alert(title, message)
  } else {
    alert(message)
  }
}

const audiosrc = require("../assets/sounds/happy-birthday-whistled.wav")

export default function Index() {
  const text = i18n.t("text");
  const motersday = i18n.t("motersday")
  const happymotersday = i18n.t("happymotersday")
  // const birthday = i18n.t("birthday")
  const happybirthday = i18n.t("happybirthday")
  const fathersday = i18n.t("fathersday")
  const happyfathersday = i18n.t("happyfathersday")
  const website = i18n.t("website")
  const myfunction = i18n.t("function")
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
    contentcontainer: { gap: 10, padding: 10, alignItems: "center" },
    button: { width: "100%" }
  });
  const player = useAudioPlayer(audiosrc)

  const playaudio = () => {
    player.seekTo(0);
    player.play()
  }
  const funcmothersday = () => {
    return myalert(motersday, happymotersday)
  }
  const funcfathersday = () => {
    return myalert(fathersday, happyfathersday)
  }
  const funcwebseite = () => {
    return Linking.openURL("https://mywebsite-tct123.fly.dev/")
  }
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.topview}>
        <Text style={styles.title}>{text}</Text>
      </View>
      <ScrollView style={styles.bottomview} contentContainerStyle={styles.contentcontainer}>
        <View style={styles.button}>
          <CustomButton onPress={() => playaudio()} title={happybirthday} />
        </View>
        <View style={styles.button}>
          <CustomButton onPress={() => funcmothersday()} title="Happy Mothersday" />
        </View>
        <View style={styles.button}>
          <CustomButton onPress={() => funcfathersday()} title="Happy Fathersday" />
        </View>
        <View style={styles.button}>
          <CustomButton onPress={() => funcwebseite()} title="Website" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
