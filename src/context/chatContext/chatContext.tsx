import { createContext, PropsWithChildren, useContext, } from "react";
import { useChatReduce, State, Action, ACTION } from "./chatReducer";


type ChatContextType = {
    state: State,
    dispatch: React.Dispatch<Action>;
}


const ChatContext = createContext<ChatContextType | undefined>(undefined);


const ChatProvider = ({ children }: PropsWithChildren) => {
    const { state, dispatch } = useChatReduce();

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

