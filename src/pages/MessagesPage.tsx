import { Container, styled } from "@mui/material";
import { SideBarLeft } from '../components/Home/SideBarLeft';
import { Chat } from '../components/Messages/Chat';
import { ChatProvider } from "../context/chatContext";

function MessagesPage() {
  return (

    <ChatProvider>
      <StyledContainer fixed >
        <SideBarLeft />
        <Chat />
      </StyledContainer>
    </ChatProvider>)
}

export { MessagesPage };

const StyledContainer = styled(Container)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  gap: '25px',

}));