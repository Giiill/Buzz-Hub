import { MessagesPage } from "../pages/MessagesPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage"; 



const routes = [
    <>
        <Route index element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='chat' element={<MessagesPage />} />
    </>
]
export { routes };

