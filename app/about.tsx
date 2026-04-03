//import IsDarkMode from "@/components/CheckDarkMode";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
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
            <Text >
                My repository:
            </Text>
            <Text >
                My repository:
            </Text>
            <Link href={"https://github.com/Creative-Media-Group/SimpleThanksReactNative"} style={{ color: "blue" }}>GitHub</Link>
            <Text >
                My repository:
            </Text>
            <Link href={"https://github.com/Creative-Media-Group/SimpleThanksReactNative"} style={{ color: "blue" }}>GitHub</Link>
            <Text >
                My repository:
            </Text>
            <Link href={"https://github.com/Creative-Media-Group/SimpleThanksReactNative"} style={{ color: "blue" }}>GitHub</Link>
        </View>
    )
}