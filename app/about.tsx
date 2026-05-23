//import IsDarkMode from "@/components/CheckDarkMode";
import { Link, useTheme } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { i18n } from "../utils/mylocalisation";

export default function Index() {
    const theme = useTheme();
    const abouttext = i18n.t("about");
    const styles = StyleSheet.create({
        safeareaview: { flex: 1 },
        view: {
            alignContent: "space-around",
            justifyContent: "center",
            gap: 10,
            width: "100%",
            height: "100%",
            alignItems: "center"
        }
    })
    return (
        <View style={styles.view}>
            <Text style={
                { color: theme.colors.text }
            }>
                {abouttext}:
            </Text>
            <Text style={{ color: theme.colors.text }}>
                My repository:
            </Text>
            <Link href={"https://github.com/Creative-Media-Group/SimpleThanksReactNative"} style={{ color: "blue" }}>GitHub</Link>
            <Text style={
                { color: theme.colors.text }
            }>
                My repository:
            </Text>
            <Link href={"https://github.com/Creative-Media-Group/SimpleThanksReactNative"} style={{ color: "blue" }}>GitHub</Link>
            <Text style={
                { color: theme.colors.text }
            }>
                My repository:
            </Text>
            <Link href={"https://github.com/Creative-Media-Group/SimpleThanksReactNative"} style={{ color: "blue" }}>GitHub</Link>
        </View>
    )
}