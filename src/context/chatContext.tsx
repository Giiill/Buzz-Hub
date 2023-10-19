import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { useUserState } from "../hooks/useUserState";
import { imgConfig } from "../assets/imgConfig";
type Messages = {
    id: number,
    message: string,
    avatar: string,
    userName: string,
    postDate: string,
    isEdit: boolean
};

type ChatContexType = {
    inputState: string,
    messages: Messages[],
    setInputValue: (value: string) => void,
    sendMessage: (value: string) => void,
};

const ChatContext = createContext<ChatContexType>({
    inputState: '',
    messages: [],
    setInputValue: () => { },
    sendMessage: () => { },

});


const ChatProvider = ({ children }: PropsWithChildren) => {
    const {userName} = useUserState();
    const [inputState, setInputState] = useState('');
    const [messages, setMessages] = useState([
        {
            id: 0,
            message: 'Hello',
            avatar: imgConfig['Darth Vader'],
            userName: 'Darth Vader',
            postDate: new Date().toLocaleString(),
            isEdit: false
        },
        {
            id: 1,
            message: 'Hi',
            avatar: imgConfig['Luke Skywalker'],
            userName: 'Luke Skywalker',
            postDate: new Date().toLocaleString(),
            isEdit: false
        },

    ]);
    const setInputValue = (value: string) => {
        setInputState(value);
    };

    const sendMessage = (value: string) => {
        // Find the maximum message ID in existing messages.
        const maxId = Math.max(...messages.map((message) => message.id), 0);
        const newMessage = {
            id: maxId + 1,
            message: value,
            avatar: imgConfig['Babi Yoda'],
            userName: userName,
            postDate: new Date().toLocaleString(),
            isEdit: false,
        }
       // Add a new message to the list of messages, create a new array.
        setMessages([...messages, newMessage]);
        setInputState('');
    };

    // ======================================================================
    // Function of saving messages in Local Storage
    const saveMessagesToLocalStorage = (messages: object) => {
        const messagesString = JSON.stringify(messages);
        localStorage.setItem('messagesData', messagesString);
    };

    // Function to read messages from Local Storage and set them to component state
    const loadMessageFromLocalStorage = () => {
        const messagesDataFromLocalStorage = localStorage.getItem('messagesData');
        if (!!messagesDataFromLocalStorage) {
            try {
                const messagesDataObj = JSON.parse(messagesDataFromLocalStorage);
                setMessages(messagesDataObj);
            } catch (error) {
                console.log('Ошибка разбора JSON:', error);
            };
        };
    };
    // Effect to load messages from Localstorage on mount
    useEffect(() => {
        loadMessageFromLocalStorage();
    }, []);
    // Effect for saving messages in Localstorage when messages state changes
    useEffect(() => {
        saveMessagesToLocalStorage(messages);
    }, [messages]);
    // ======================================================================

    return (
        <ChatContext.Provider value={{ inputState, messages, setInputValue, sendMessage, }}>
            {children}
        </ChatContext.Provider>
    )
};


const useMassagesState = () => {
    return useContext(ChatContext);
}

export {
    ChatProvider,
    useMassagesState
}