//import IsDarkMode from "@/components/CheckDarkMode";
import { Host, Text } from "@expo/ui";
import { Link, useTheme } from "expo-router";
import { StyleSheet } from "react-native";
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
        <Host style={styles.view}>
            <Text>
                {abouttext}:
            </Text>
            <Text>
                My repository:
            </Text>
            <Link href={"https://github.com/Creative-Media-Group/SimpleThanksReactNative"} style={{ color: "blue" }}>GitHub</Link>
            <Text>
                My repository:
            </Text>
            <Link href={"https://github.com/Creative-Media-Group/SimpleThanksReactNative"} style={{ color: "blue" }}>GitHub</Link>
            <Text>
                My repository:
            </Text>
            <Link href={"https://github.com/Creative-Media-Group/SimpleThanksReactNative"} style={{ color: "blue" }}>GitHub</Link>
        </Host>
    )
}