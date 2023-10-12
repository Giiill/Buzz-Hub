import { Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { routes } from './types/Routes';
import { ThemeProvider, createTheme } from '@mui/material';



function App() {
  return (
    <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Layout />}>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Route>
        </Routes>
    </ThemeProvider>
  );
};

export { App };

const theme = createTheme({
  palette: {
    primary: {
      main: '#0050B3',
    },
    secondary: {
      main: '#FFFFFF',
    },
    success: {
      main: '#c7c7c7',
    },
  },
});