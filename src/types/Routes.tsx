import { MessagesPage } from "../pages/MessagesPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { HomePage } from "../pages/HomePage"; 

const routes = [
    {index: true, element: <HomePage />},
    {path: '*', element: <NotFoundPage />},
    {path: 'messages', element: <MessagesPage />}
]
export { routes };
