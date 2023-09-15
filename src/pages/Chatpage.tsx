import { Container } from "@mui/material";
import SideBarLeft from '../components/SideBarLeft';
import Content from '../components/Content';

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
            <Content />
          </Container>
        


    </div >)
}

export default Home;