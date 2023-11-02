import { createTheme } from '@mui/material';

const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#0050B3',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#FFFFFF',
            contrastText: '#000',
        },
        success: {
            main: '#c7c7c7',
        },
    },
});

export { lightTheme };
