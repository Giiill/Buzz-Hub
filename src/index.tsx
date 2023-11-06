import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material';
import { CustomThemeProvider } from './context/themeContext';
import './reset.css'; // Reset Browser Styles
import { useThemeState } from './hooks/useThemeState';
import { store } from './store/store';
import { Provider } from 'react-redux'

const MyRootComponent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: '100vw',
  height: '100vh'
}));



const AppWithTheme = () => {
  const { theme } = useThemeState();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MyRootComponent>
          <App />
        </MyRootComponent>
      </ThemeProvider>
    </Provider>
  )
};



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <CustomThemeProvider>
      <AppWithTheme />
    </CustomThemeProvider>
  </BrowserRouter>
);


