import { createContext, PropsWithChildren, useContext, } from "react";
import { useChatReduce, State, Action, ACTION } from "./chatReducer";


type ChatContextType = {
    state: State,
    dispatch: React.Dispatch<Action>;
}


const ChatContext = createContext<ChatContextType | undefined>(undefined);


const ChatProvider = ({ children }: PropsWithChildren) => {
    const { state, dispatch } = useChatReduce();

    // TEMPORARILY DELETED
    // ======================================================================
    // ======================================================================
    // Function of saving messages in Local Storage
    // const saveMessagesToLocalStorage = (messages: object) => {
    //     const messagesString = JSON.stringify(messages);
    //     localStorage.setItem('messagesData', messagesString);
    // };

    // // Function to read messages from Local Storage and set them to component state
    // const loadMessageFromLocalStorage = () => {
    //     const messagesDataFromLocalStorage = localStorage.getItem('messagesData');
    //     if (!!messagesDataFromLocalStorage) {
    //         try {
    //             const messagesDataObj = JSON.parse(messagesDataFromLocalStorage);
    //             setMessages(messagesDataObj);
    //         } catch (error) {
    //             console.log('Ошибка разбора JSON:', error);
    //         };
    //     };
    // };
    // // Effect to load messages from Localstorage on mount
    // useEffect(() => {
    //     loadMessageFromLocalStorage();
    // }, []);
    // // Effect for saving messages in Localstorage when messages state changes
    // useEffect(() => {
    //     saveMessagesToLocalStorage(messages);
    // }, [messages]);
    // ======================================================================
    // ======================================================================
    // TEMPORARILY DELETED

    return (
        <ChatContext.Provider value={{ state, dispatch, }}>
            {children}
        </ChatContext.Provider>
    )
};
// Hook for getting chat state
const useChatState = () => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useChatState must be used within a ChatProvider');
    }
    return context.state
};

// Hook to get the chat manager
const useChatDispatch = () => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useChatDispatch must be used within a ChatProvider');
    }
    return context.dispatch
};

export { useChatState, useChatDispatch, ChatProvider, ACTION };

