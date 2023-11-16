import Box from '@mui/material/Box';
import Avatar from "@mui/material/Avatar";
import { Typography, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { messagesSelector } from '../../../../store/chat/chatSelectors';
import { useEffect, useRef } from 'react';
import { chatSliceActions } from '../../../../store/chat/chatSlice';
import { useChatLocalStorage } from '../../../../hooks/useChatLocalStorage';

type BoxMessagesProps = {
    scrollRef: React.RefObject<HTMLDivElement>
};

const { loadMessages } = chatSliceActions;

const BoxMessages = ({ scrollRef }: BoxMessagesProps) => {
    const dispatch = useDispatch();
    const messages = useSelector(messagesSelector);


    // Create a link to the element that we will use for scrolling
    const MessagesRef = scrollRef || useRef<HTMLDivElement>(null);

    // RETRIEVING DATA FROM LOCAL STORAGE AND UPDATING CHAT STATE
    // ====================================================================================
    // ====================================================================================
    // use the useChatLocalStorage hook to get data from local storage
    const { value, setValue } = useChatLocalStorage('messagesData', messages);

    // loading data from local storage when mounting a component
    useEffect(() => {
        dispatch(loadMessages(value))
    }, [MessagesRef]);
    // ====================================================================================
    // ====================================================================================

    return (
        <Messages ref={MessagesRef}>
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
        </Messages>
    )
};

export { BoxMessages };

const Messages = styled(Box)(() => ({
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