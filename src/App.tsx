import { Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { routes } from './types/Routes';




function App() {
  return (
   <Routes>
        <Route path='/' element={<Layout />}>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Route>
      </Routes>
  )
}

export { App };
