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
}

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
            id: 1,
            message: 'Hello',
            avatar: imgConfig['Darth Vader'],
            userName: 'Darth Vader',
            postDate: new Date().toLocaleString(),
            isEdit: false
        },
        {
            id: 2,
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
        const newMessage = {
            id: 3,
            message: value,
            avatar: imgConfig['Babi Yoda'],
            userName: userName,
            postDate: new Date().toLocaleString(),
            isEdit: false,
        }
        // при помощи деструктуризации создается новый массив
        // включая все данные из предыдущего массива, но при этом
        // в новый массив в конец добавляется еще newMessage
        setMessages([...messages, newMessage]);
        setInputState('');
    };
    // Функция сохранения сообщений в Local Storage
    const saveMessagesToLocalStorage = (messages: object) => {
        const messagesString = JSON.stringify(messages);
        localStorage.setItem('messagesData', messagesString);
    };
    // Функция для чтения сообщений из Local Storage и установки их в состоянии компонента
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
    // Эффект для загрузки сообщений из Local Storage при монтировании
    useEffect(() => {
        loadMessageFromLocalStorage();
    }, []);
    // Эффект для сохранения сообщений в Local Storage при изменении состояния messages
    useEffect(() => {
        saveMessagesToLocalStorage(messages);
    }, [messages]);

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