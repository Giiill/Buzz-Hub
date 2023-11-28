import { createSlice } from "@reduxjs/toolkit";
import { imgConfig } from "../../assets/imgConfig";

// Type for presenting a message in a chat
export type Message = {
    id: number,
    message: string,
    avatar: string,
    userName: string,
    postDate: string,
    isEdit: boolean
};

// Chat slice (fragment) state type
type chatSliceScheme = {
    input: string,
    messages: Message[],
    userName: string
};

// Initial state of the chat slice
const initialState: chatSliceScheme = {
    userName: 'Niki', // Finish later!!!
    input: '',
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
    ],
};

// Creating a slice of chat using Redux Toolkit
const chatSlice = createSlice({
    name: 'chatSlice', // Slice name
    initialState,      // Initial state
    reducers: {
        // Setting the chat input field value
        setInputState: (state, { payload }) => {
            const { value } = payload;
            state.input = value;
        },

        // Send a message to chat
        sendMessage: (state) => {
            const maxId = Math.max(...state.messages.map((message) => message.id), 0);
            const newMessage = {
                id: maxId + 1,
                message: state.input,
                avatar: imgConfig['Babi Yoda'],
                userName: state.userName,
                postDate: new Date().toLocaleString(),
                isEdit: false,
            };
            const newMessages = [...state.messages, newMessage];
            state.messages = newMessages;
            state.input = '';

            // Saving messages to your browser's local storage
            localStorage.setItem('messagesData', JSON.stringify(newMessages));
        },

        // Loading messages from local storage into chat state
        loadMessages: (state, { payload }) => {
            state.messages = payload;
        },
    }
});
// Exporting reducer and actions from a chat slice
export const {
    reducer: chatSliceReducer,
    actions: chatSliceActions,
} = chatSlice;

