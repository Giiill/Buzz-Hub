import Button from '@mui/material/Button';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { styled } from '@mui/material';
import { useDispatch } from 'react-redux';
import { chatSliceActions } from '../../../../store/chat/chatSlice';

type ButtonSendMessageProps = {
    scrollToBottom: () => void;
};

const { sendMessage } = chatSliceActions;

const ButtonSendMessage = ({ scrollToBottom }: ButtonSendMessageProps) => {
    const dispatch = useDispatch();

    // Function to send a message
    const handleSendMessage = () => {
        dispatch(sendMessage());
        // Delay before scrolling down to ensure correct scrolling after adding a message.
        setTimeout(scrollToBottom, 0);
    };

    return (
        <ButtonSend
            variant="contained"
            endIcon={<IconSend />}
            onClick={handleSendMessage}>
            Send
        </ButtonSend>
    )
}

export { ButtonSendMessage };

const ButtonSend = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    height: '25px',
    marginRight: '10px',
    "&:hover": {
        backgroundColor: theme.palette.primary.main,
    }
}));

const IconSend = styled(HistoryEduIcon)(() => ({
}));