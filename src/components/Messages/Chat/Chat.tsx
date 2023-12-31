import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import Avatar from "@mui/material/Avatar";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import IconButton from '@mui/material/IconButton/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { Typography, styled } from '@mui/material';
import { MessageInputField } from './components/messageInputField';
import { BoxMessages } from './components/BoxMessages';
import { ButtonSendMessage } from './components/ButtonSendMessage';
import { useRef } from 'react';

const Chat = () => {

  // Link to DOM element for scrolling down
  const MessagesRef = useRef<HTMLDivElement>(null);

  // Scroll down function after sending a message.
  const scrollToBottom = () => {
    if (MessagesRef.current) {
      MessagesRef.current.scrollTop =
        MessagesRef.current.scrollHeight;
    };
  };

  return (
    <MainBox>
      <HeadersChat>
        <ButtonBack startIcon={<KeyboardArrowLeftIcon />}>
          Back
        </ButtonBack>
        < ChatInfo>
          <NameChat>Jedi chat</NameChat>
          <ChatParticipants>3 users</ChatParticipants>
        </ChatInfo>
        <AvatartAndBurger>
          <AvatarChat alt='' src="" />
          <Burger>
            <BurgerIconButton>
              <MoreIcon />
            </BurgerIconButton>
          </Burger>
        </AvatartAndBurger>
      </HeadersChat>
      <BoxMessages scrollRef={MessagesRef} />
      <EnteringMessage>
        <AddReaction>
          <ReactionIcon />
        </AddReaction>
        <AttatchFile>
          <AttachFileIcon />
        </AttatchFile>
        <MessageInputField scrollToBottom={scrollToBottom} />
        <ButtonSendMessage scrollToBottom={scrollToBottom} />
      </EnteringMessage>
    </MainBox>

  );
}
export { Chat };

const MainBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '500px',
  backgroundColor: theme.palette.secondary.main,
  boxShadow: '0px 0px 8px 4px #0000006c',
  display: 'flex',
  flexDirection: 'column',
}));

const HeadersChat = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  height: '80px',
  boxShadow: '0px 0px 8px 4px #0000006c',
  zIndex: 1,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingRight: '10px',
  paddingLeft: '10px'

}));

const ButtonBack = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'flex',
  textTransform: 'none',
  fontSize: '14px'
}));

const ChatInfo = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const AvatartAndBurger = styled(Box)(() => ({
  display: 'flex',
  gap: 30,
  alignItems: 'center'
}));

const AvatarChat = styled(Avatar)(({ theme }) => ({
  boxShadow: '0px 0px 8px 4px #0000006c',
  height: '50px',
  width: '50px'
}));

const Burger = styled(Box)(() => ({

}));

const BurgerIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main
}))


const NameChat = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '18px',
  textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)',
  fontWeight: 'bold'
}));

const ChatParticipants = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '14px',
}));

const EnteringMessage = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  backgroundColor: theme.palette.secondary.main,
  boxShadow: '0px 0px 8px 4px #0000006c',
  zIndex: 1
}));

const AddReaction = styled(Button)(({ theme }) => ({
  height: '40px',
  minWidth: '40px',
  borderRadius: '50%',
  '&:focus': {
    color: theme.palette.primary.main,
  }
}));

const ReactionIcon = styled(AddReactionIcon)(({ theme }) => ({
  fontSize: '18px',
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
}));

const AttatchFile = styled(Button)(({ theme }) => ({
  height: '40px',
  minWidth: '40px',
  borderRadius: '50%',
  '&:focus': {
    color: theme.palette.primary.main,
  }
}));

const AttachFileIcon = styled(AttachEmailIcon)(({ theme }) => ({
  fontSize: '18px',
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,

}));
