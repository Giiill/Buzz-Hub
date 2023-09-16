import { Outlet } from 'react-router-dom';
import Bar from './Bar';
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
}

export default Layout;


const theme = createTheme({
    palette: {
        primary: {
            main: '#0050B3',
        },
        secondary: {
            main: '#FFFFFF',
        },
    },
});