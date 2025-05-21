import { useColorScheme } from "react-native";

export default function isDarkMode() {
    const colorscheme = useColorScheme();
    const isdarkmode = colorscheme === "dark";
    return isdarkmode;
}