import { useColorScheme } from "react-native";

export default function IsDarkMode() {
    const colorscheme = useColorScheme();
    const isdarkmode = colorscheme === "dark";
    return isdarkmode;
}