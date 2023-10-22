import { PropsWithChildren, createContext, useState, useEffect } from 'react';
import { lightTheme } from '../stylesTheme/light';
import { darkTheme } from '../stylesTheme/dark';
import { createTheme } from '@mui/material/styles';

type ThemeContextType = {
    theme: object,
    state: string,
    toggleTheme: () => void,
}

const ThemeContext = createContext<ThemeContextType>({ theme: {}, state: '', toggleTheme: () => {}});

const CustomThemeProvider = ({ children }: PropsWithChildren) => {

    const [state, setState] = useState<'light' | 'dark'>('light')
    const themes = {
        light: lightTheme,
        dark: darkTheme
    };
    const makeTheme = () => {
        return createTheme(themes[state]);
    };
    
    const theme = makeTheme();

    const toggleTheme = () => {
        setState(state === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        const updatedTheme = createTheme(themes[state]);    
      }, [state]);

    return (
        <ThemeContext.Provider value={{ theme, state, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { CustomThemeProvider, ThemeContext };
