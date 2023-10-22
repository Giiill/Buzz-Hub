import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import Button from '@mui/material/Button';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import Avatar from "@mui/material/Avatar";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import IconButton from '@mui/material/IconButton/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { Typography, styled } from '@mui/material';
import { useMassagesState } from '../../context/chatContext';
import { useRef } from 'react';

function Chat() {
  const { inputState, setInputValue, messages, sendMessage } = useMassagesState();

  // Scroll down after sending a message
  // ----------------------------------
  const BoxMessagesRef = useRef<HTMLDivElement>(null);

  // Scroll down function after sending a message.
  const scrollToBottom = () => {
    if (BoxMessagesRef.current) {
      BoxMessagesRef.current.scrollTop =
        BoxMessagesRef.current.scrollHeight;
    };
  };

  // Key handler called when the "Enter" key is pressed.
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSendAction(inputState)
    }
  };
  // Click handler for the submit button.
  const handleKeyClick = (inputState: string) => {
    handleSendAction(inputState)
  };
  // Function to send a message and scroll down.
  const handleSendAction = (inputState: string) => {
    sendMessage(inputState);
    // Delay before scrolling down to ensure correct scrolling after adding a message.
    setTimeout(scrollToBottom, 0);
  };
  // ----------------------------------
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
      <BoxMessages ref={BoxMessagesRef}>
        {messages.map(message => {
          return (
            <Message>
              <UserAvatart alt={message.userName} src={message.avatar} />
              <MessageText>
                <BoxUserNameAndPostDate>
                  <UserName>{message.userName}</UserName>
                  <PostDate>{message.postDate}</PostDate>
                </BoxUserNameAndPostDate>
                <TextContent>{message.message}</TextContent>
              </MessageText>
            </Message>
          )
        })}
      </BoxMessages>
      <EnteringMessage>
        <AddReaction>
          <ReactionIcon />
        </AddReaction>
        <AttatchFile>
          <AttachFileIcon />
        </AttatchFile>
        <MessageInputField
          placeholder='Write a message...'
          onKeyDown={handleKeyPress}
          value={inputState}
          onChange={(e) =>
            setInputValue(e.target.value)} />
        <ButtonSendMessage
          variant="contained"
          endIcon={<IconSendMessage />}
          onClick={() => handleKeyClick(inputState)}>
          Send
        </ButtonSendMessage>
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

const BoxMessages = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  overflowY: "auto",
  overflowX: 'hidden',
  paddingTop: '20px',
  paddingBottom: '20px'
}));

const Message = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingLeft: '10px',
  backgroundColor: theme.palette.secondary.main,
  marginBottom: '10px',
}));

const UserAvatart = styled(Avatar)(() => ({
  height: '50px',
  width: '50px',
  bordeRadius: "50%",
  boxShadow: "0px 0px 8px 3px #0000006c",
}));

const MessageText = styled(Box)(({ theme }) => ({
  paddingLeft: '10px',
  color: theme.palette.secondary.contrastText
}));

const BoxUserNameAndPostDate = styled(Box)(() => ({
  display: 'flex',
  gap: '30px'
}));

const UserName = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",


}));

const PostDate = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '11px'
}));

const TextContent = styled(Typography)(() => ({
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

const MessageInputField = styled(Input)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText
}));

const ButtonSendMessage = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  height: '25px',
  marginRight: '10px',
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  }
}));

const IconSendMessage = styled(HistoryEduIcon)(() => ({
}));