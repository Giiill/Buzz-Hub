import { MessagesPage } from "../pages/MessagesPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { HomePage } from "../pages/HomePage";
import { Layout } from "../pages/Layout";
import { Routes, Route } from 'react-router-dom';

type Route = {
    index?: boolean,
    path?: string,
    element: JSX.Element
};

type Routes = Route[];


const routes: Routes = [
    { index: true, element: <HomePage /> },
    { path: '*', element: <NotFoundPage /> },
    { path: 'messages', element: <MessagesPage /> }
]
const routeConfig = (
    <Routes>
        <Route path='/' element={<Layout />}>
            {routes.map((route, index) => (
                <Route key={index} {...route} />
            ))}
        </Route>
    </Routes>)

export { routeConfig };
