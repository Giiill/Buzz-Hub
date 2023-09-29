import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useUserState } from "../hooks/useUserState";
type Messages = {
    id: number,
    message: string,
    userName: string,
    postDate: string,
    isEdit: boolean
};

type ChatContexType = {
    inputState: string,
    messages: Messages[],
    setInputValue: (value: string) => void,
    sendMessage: (value: string) => void,
}

const ChatContext = createContext<ChatContexType>({
    inputState: '',
    messages: [],
    setInputValue: () => { },
    sendMessage: () => { },

});


const ChatProvider = ({ children }: PropsWithChildren) => {
    const [inputState, setInputState] = useState('');

    const [messages, setMessages] = useState([
        {
            id: 1,
            message: 'Hello',
            userName: 'Niki',
            postDate: new Date().toLocaleString(),
            isEdit: false
        },
        {
            id: 2,
            message: 'Hi',
            userName: 'Alex',
            postDate: new Date().toLocaleString(),
            isEdit: false
        },

    ]);
    const { userName } = useUserState();
    const setInputValue = (value: string) => {
        setInputState(value);
    };

    const sendMessage = (value: string) => {
        const newMessage = {
            id: 3,
            message: value,
            userName: userName,
            postDate: new Date().toLocaleString(),
            isEdit: false,
        }
        // при помощи деструктуризации создается новый массив
        // включая все данные из предыдущего массива, но при этом
        // в новый массив в конец добавляется еще newMessage
        setMessages([...messages, newMessage]);
        setInputState('');
    }

    return (
        <ChatContext.Provider value={{ inputState, messages, setInputValue, sendMessage }}>
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