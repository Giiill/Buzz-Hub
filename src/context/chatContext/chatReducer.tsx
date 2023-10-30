import { imgConfig } from "../../assets/imgConfig";
import { useReducer } from "react"
import { useUserState } from "../../hooks/useUserState";

// Defining types
// ======================================================
// ======================================================
type Message = {
    id: number,
    message: string,
    avatar: string,
    userName: string,
    postDate: string,
    isEdit: boolean
};

export type State = {
    userName: string,
    inputState: string,
    messages: Message[]
};

export type Action = {
    type: string,
    payload?: any
};
// ======================================================
// ======================================================


// Defining Actions
// ======================================================
const ACTION = {
    SET_USER_NAME: 'SET_USER_NAME',
    SET_INPUT_STATE: 'SET_INPUT_STATE',
    SEND_MESSAGE: 'SEND_MESSAGE',
};
// ======================================================

const reducer = (state: State, action: Action) => {
    const { payload } = action;
    switch (action.type) {
        case ACTION.SET_USER_NAME:
            return {
                ...state,
                userName: payload.userName
            };
        case ACTION.SET_INPUT_STATE:
            return {
                ...state,
                inputState: payload.inputState
            };
        case ACTION.SEND_MESSAGE:
            const maxId = Math.max(...state.messages.map((message) => message.id), 0);
            const newMessage = {
                id: maxId + 1,
                message: action.payload,
                avatar: imgConfig['Babi Yoda'],
                userName: state.userName,
                postDate: new Date().toLocaleString(),
                isEdit: false,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage], inputState: ''
            };
        default:
            return state

    };
};


// A custom hook that uses user state
const useChatReduce = () => {

    // Getting the username using the useUserState hook
    const { userName } = useUserState();

    // Initial chat state
    const initialState = {
        userName: userName,
        inputState: '',
        messages: [
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
        ]
    };

    // use useReducer for state management and dispatcher
    const [state, dispatch] = useReducer(reducer, initialState);
    return { state, dispatch };
};

export { useChatReduce, ACTION };