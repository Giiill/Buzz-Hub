import Bar from "./Bar";
import SideBarRight from './SideBarRight/SideBarRight';
import { Container } from "@mui/material";
import Content from './Content';
import SideBarLeft from './SideBarLeft';



function App() {
  return (
    <div>
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
    </div>)
}

export default App;
