import { Container, styled } from "@mui/material";
import { SideBarLeft } from '../components/Home/SideBarLeft';
import { Chat } from '../components/Messages/Chat/Chat';

function MessagesPage() {
  return (
    <StyledContainer fixed >
      <SideBarLeft />
      <Chat />
    </StyledContainer>
  )
}

export { MessagesPage };

const StyledContainer = styled(Container)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  gap: '25px',

}));