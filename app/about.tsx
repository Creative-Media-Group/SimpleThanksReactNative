import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
export default function Index() {
    const insets = useSafeAreaInsets()
    const styles = StyleSheet.create({
        safeareaview: { flex: 1 }
    })
    return (
        <SafeAreaView style={styles.safeareaview}>
            <View><Text></Text></View>
        </SafeAreaView>
    )
}