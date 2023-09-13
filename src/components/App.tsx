import Bar from "./Bar";
import SideBarRight from './SideBarRight/SideBarRight';
import { Container } from "@mui/material";
import Content from './Content';
import SideBarLeft from './SideBarLeft';
import { UserProvider } from "../context/userContext";
import { GlobalStylesProvider } from "../context/globalStyles";



function App() {
  return (
    <div>
      <GlobalStylesProvider>
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
      </GlobalStylesProvider>

    </div>)
}

export default App;
