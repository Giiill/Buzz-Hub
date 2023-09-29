import { Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { routes as customRoutes } from './types/RouteTypes';




function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Layout />}>
          {/* Импортируем пользовательские маршруты из другого файла */}
          {customRoutes}
        </Route>
      </Routes>
    </>

    )
}

export { App };
