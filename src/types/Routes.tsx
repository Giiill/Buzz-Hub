import { MessagesPage } from "../pages/MessagesPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { HomePage } from "../pages/HomePage"; 

type Route = {
    index?: boolean,
    path?: string,
    element: JSX.Element
};

type Routes = Route[];


const routes: Routes = [
    {index: true, element: <HomePage />},
    {path: '*', element: <NotFoundPage />},
    {path: 'messages', element: <MessagesPage />}
]
export { routes };
