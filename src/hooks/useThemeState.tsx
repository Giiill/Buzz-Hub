import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

function useThemeState() {
    const { theme, state, toggleTheme } = useContext(ThemeContext);
    return { theme, state, toggleTheme };
};

export { useThemeState };