import Bar from "../components/Bar";
import { Container } from "@mui/material";
import SideBarLeft from '../components/SideBarLeft';
import Content from '../components/Content';
import SideBarRight from '../components/SideBarRight/SideBarRight';
import { UserProvider } from "../context/userContext";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Home() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <Bar />
          <Container fixed sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            height: '100vh',
            gap: '25px',
          }}>
            <SideBarLeft />
            <Content />
            <SideBarRight />
          </Container>
        </UserProvider>
      </ThemeProvider>


    </div >)
}

export default Home;




const theme = createTheme({
  palette: {
    primary: {
      main: '#0050B3',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
});