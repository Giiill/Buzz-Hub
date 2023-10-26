import { MessagesPage } from "../pages/MessagesPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { HomePage } from "../pages/HomePage";
import { Layout } from "../pages/Layout";
import { Routes, Route } from 'react-router-dom';
import { ERoutes } from "./routeDefinitions";

type Route = {
    path: string,
    element: JSX.Element
};

type Routes = Route[];

const routes: Routes = [
    { path: ERoutes.HomePage, element: <HomePage /> },
    { path: ERoutes.Messages, element: <MessagesPage /> },
    { path: ERoutes.NotFoundPage, element: <NotFoundPage /> }
];

const routeConfig = (
    <Routes>
        <Route path='/' element={<Layout />}>
            {routes.map((route, index) => (
                <Route key={index} {...route} />
            ))}
        </Route>
    </Routes>)

export { routeConfig };



