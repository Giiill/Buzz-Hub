import { Container, styled } from "@mui/material";
import { SideBarLeft } from '../components/Home/SideBarLeft';
import { Content } from '../components/Home/Content';
import { SideBarRight } from '../components/Home/SideBarRight/SideBarRight';

function HomePage() {
  return (
    <StyledContainer fixed>
      <SideBarLeft />
      <Content />
      <SideBarRight />
    </StyledContainer>
  )
}

export { HomePage };

const StyledContainer = styled(Container)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  gap: '25px',
}));

