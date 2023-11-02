import { createTheme } from '@mui/material';

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#262626',
            contrastText: '#fcfcfc',
        },
        secondary: {
            main: '#4f4f4f',
            contrastText: '#c4c4c4',
        },
        success: {
            main: '#6e6e6e',
        },
        
    },
});

export { darkTheme };