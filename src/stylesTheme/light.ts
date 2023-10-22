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



/*
const light = createTheme({
    palette: {
        primary: {
            main: '#0050B3',
        },
        secondary: {
            main: '#FFFFFF',
        },
        success: {
            main: '#c7c7c7',
        },
    },
});


const light = createTheme({
    palette: {
        primary: {
            main: '#595959',
        },
        secondary: {
            main: '#212121',
        },
        success: {
            main: '#ababab',
        },
    },
});
*/