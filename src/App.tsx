import { routeConfig } from './types/Routes';
import { ThemeProvider, createTheme } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {routeConfig}
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
      main: '#0050B3',
    },
    success: {
      main: '#c7c7c7',
    },
  },
});