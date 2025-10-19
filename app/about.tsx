import IsDarkMode from "@/components/CheckDarkMode";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function Index() {
    const insets = useSafeAreaInsets()
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
                { color: IsDarkMode() ? "white" : "black" }
            }>
                My repository:
            </Text>
            <Text style={
                { color: IsDarkMode() ? "white" : "black" }
            }>
                My repository:
            </Text>
            <Link href={"https://github.com/Creative-Media-Group/SimpleThanksReactNative"} style={{ color: "blue" }}>GitHub</Link>
            <Text style={
                { color: IsDarkMode() ? "white" : "black" }
            }>
                My repository:
            </Text>
            <Link href={"https://github.com/Creative-Media-Group/SimpleThanksReactNative"} style={{ color: "blue" }}>GitHub</Link>
            <Text style={
                { color: IsDarkMode() ? "white" : "black" }
            }>
                My repository:
            </Text>
            <Link href={"https://github.com/Creative-Media-Group/SimpleThanksReactNative"} style={{ color: "blue" }}>GitHub</Link>
        </View>
    )
}