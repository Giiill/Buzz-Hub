import { createTheme } from '@mui/material/styles';
import React, { createContext } from 'react';
import { UserProvider } from "../context/userContext";
type GlobalStylesProps = {
  primary?: string,
  secondary?: string;
  children: React.ReactNode;
};


const GlobalStylesContext = createContext<GlobalStylesProps | undefined>(undefined);

const GlobalStylesProvider: React.FC<GlobalStylesProps> = ({ primary, secondary, children }) => {

  const theme = createTheme({
    palette: {
      primary: {
        main: primary || '#0050B3', // используется значение из пропсов, в противном случаее используется значение по умолчанию
      },
      secondary: {
        main: secondary || '#FFFFFF', // используется значение из пропсов, в противном случаее используется значение по умолчанию
      },
    },
  });
  const globalStyles = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    children
  }

  return (
    <GlobalStylesContext.Provider value={globalStyles}>
      <UserProvider>
        {children}
      </UserProvider>
    </GlobalStylesContext.Provider>
  )
}


export {
  GlobalStylesContext,
  GlobalStylesProvider
}

