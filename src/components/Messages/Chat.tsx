import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import Button from '@mui/material/Button';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import Avatar from "@mui/material/Avatar";
import { Typography, styled } from '@mui/material';
import { useMassagesState } from '../../context/chatContext';

function Chat() {
  const { inputState, setInputValue, messages, sendMessage } = useMassagesState();
  return (

    <MainBox>
      {messages.map(message => {
        return (
          <Message>
            <UserAvatart alt={message.userName} src="/static/images/avatar/1.jpg" />
            <MessageText>
              <UserName>{message.userName}</UserName>
              <TextContent>{message.message}</TextContent>
            </MessageText>
          </Message>
        )
      })}
      <EnteringMessage>
        <AttatchFile>
          <AttachFileIcon />
        </AttatchFile>
        <MessageInputField value={inputState} onChange={(e) =>
          setInputValue(e.target.value)} />
        <ButtonSendMessage
          variant="contained"
          endIcon={<IconSendMessage />}
          onClick={() => sendMessage(inputState)}>
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
  justifyContent: 'flex-end',
  overflow: 'auto'
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

const UserName = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  backgroundColor: theme.palette.secondary.main,

}));

const TextContent = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

const EnteringMessage = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  marginBottom: '5px',
  backgroundColor: theme.palette.secondary.main
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

const IconSendMessage = styled(HistoryEduIcon)(({ theme }) => ({

}))