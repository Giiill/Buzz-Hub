import { Outlet } from 'react-router-dom';
import { Bar } from '../components/Bar';
import { UserProvider } from '../context/userContext';
import { ThemeProvider, createTheme } from '@mui/material';


const Layout = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <UserProvider>
                    <Bar />
                    <Outlet />
                </UserProvider>
            </ThemeProvider>
        </>

    )
};

export { Layout };


const theme = createTheme({
    palette: {
        primary: {
            main: '#0050B3',
        },
        secondary: {
            main: '#FFFFFF',
        },
        success: {
            main: '#e3e1e1',
        },
    },
});
