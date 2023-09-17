import { Container } from "@mui/material";
import SideBarLeft from '../components/Home/SideBarLeft';
import Chat from '../components/Messages/Chat';

function Home() {
  return (
    <div>
          <Container fixed sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            height: '100vh',
            gap: '25px',
          }}>
            <SideBarLeft />
            <Chat />
          </Container>
    </div >)
}

export default Home;