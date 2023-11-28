import Input from '@mui/material/Input';
import { styled } from '@mui/material';
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { chatSliceActions } from '../../../../store/chat/chatSlice';
import { messageInputSelector } from '../../../../store/chat/chatSelectors';

type MessageInputFieldProps = {
    scrollToBottom: () => void
};

const { setInputState, sendMessage } = chatSliceActions;

const MessageInputField = ({ scrollToBottom }: MessageInputFieldProps) => {
    const dispatch = useDispatch();
    const input = useSelector(messageInputSelector);

    // input value change handler
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        // Dispatch the action to update the input value in the Redux state
        // (in short, changes the values of the input field)
        dispatch(setInputState({ value: e.target.value }))
    };

    // Key handler called when the "Enter" key is pressed.
    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            handleSendMessage();
        }
    };

    // Function for sending a message
    const handleSendMessage = () => {
        dispatch(sendMessage());
        // Delay before scrolling down to ensure correct scrolling after adding a message.
        setTimeout(scrollToBottom, 0);
    };

    return (
        <MessageInput
            placeholder='Write a message...'
            type='string'
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
        />
    )
};

export { MessageInputField };

const MessageInput = styled(Input)(({ theme }) => ({
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
}));



