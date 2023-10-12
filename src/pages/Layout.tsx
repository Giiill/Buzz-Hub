import { Outlet } from 'react-router-dom';
import { Bar } from '../components/Bar';
import { UserProvider } from '../context/userContext';


const Layout = () => {
    return (
        <UserProvider>
            <Bar />
            <Outlet />
        </UserProvider>
    )
};

export { Layout };



