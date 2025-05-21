import isDarkMode from "@/components/CheckDarkMode";
import * as React from 'react';
import { StyleSheet } from "react-native";
import { Appbar } from 'react-native-paper';

interface AppBarComponentProps {
    title: string;
}

const AppBarComponent: React.FC<AppBarComponentProps> = ({ title }) => {
    return (
        <Appbar.Header style={styles.bg}>
            <Appbar.Content title={title} style={styles.title} />
        </Appbar.Header>
    );
};
const styles = StyleSheet.create({ bg: { backgroundColor: isDarkMode() ? "#000" : "#fff" }, title: { color: isDarkMode() ? "#fff" : "#000" } });
export default AppBarComponent;