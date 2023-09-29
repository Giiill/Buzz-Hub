import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import Button from '@mui/material/Button';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import Avatar from "@mui/material/Avatar";
import { Typography, styled } from '@mui/material';
import { useMassagesState } from '../../context/chatContext';
import { useRef } from 'react';

function Chat() {
  const { inputState, setInputValue, messages, sendMessage } = useMassagesState();

  // Scroll down after sending a message
  const BoxMessagesRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    if (BoxMessagesRef.current) {
      BoxMessagesRef.current.scrollTop =
        BoxMessagesRef.current.scrollHeight;
    };
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSendAction(inputState)
    }
  };
  const handleKeyClick = (inputState: string) => {
    handleSendAction(inputState)
  };
  const handleSendAction = (inputState: string) => {
    sendMessage(inputState);
    setTimeout(scrollToBottom, 0);
  };
  // ----------------------------------
  return (
    <MainBox>
      <BoxMessages ref={BoxMessagesRef}>
        {messages.map(message => {
          return (
            <Message>
              <UserAvatart alt={message.userName} src="/static/images/avatar/1.jpg" />
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
        <AttatchFile>
          <AttachFileIcon />
        </AttatchFile>
        <MessageInputField
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

const BoxMessages = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  overflowY: "auto",
}));

const Message = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  paddingLeft: '10px',
  backgroundColor: theme.palette.secondary.main,
  marginBottom: '10px',

}));

const UserAvatart = styled(Avatar)(() => ({
  bordeRadius: "50%",
  boxShadow: "0px 0px 8px 3px #0000006c",
}));

const MessageText = styled(Box)(() => ({
  paddingLeft: '10px'
}));

const BoxUserNameAndPostDate = styled(Box)(() => ({
  display: 'flex',
  gap: '30px'
}));

const UserName = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  backgroundColor: theme.palette.secondary.main,

}));

const PostDate = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '11px'
}));

const TextContent = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

const EnteringMessage = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  marginBottom: '5px',
  backgroundColor: theme.palette.secondary.main,

}));

const AttatchFile = styled(Button)(({ theme }) => ({
  height: '40px',
  minWidth: '40px',
  borderRadius: '50%',
  marginLeft: '10px',
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
  placeholder: "Write a message",
  width: '100%',
  backgroundColor: theme.palette.secondary.main,
}));

const ButtonSendMessage = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  height: '25px',
  marginRight: '10px',
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  }
}));

const IconSendMessage = styled(HistoryEduIcon)(() => ({
}));