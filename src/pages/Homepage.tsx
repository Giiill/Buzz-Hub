import { Container } from "@mui/material";
import SideBarLeft from '../components/Home/SideBarLeft';
import Content from '../components/Home/Content';
import SideBarRight from '../components/Home/SideBarRight/SideBarRight';

function Home() {
  return (
    <>
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
    </>)
}

export default Home;




