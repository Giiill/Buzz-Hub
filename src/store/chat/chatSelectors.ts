import { Message } from "./chatSlice";

const messageInputSelector = (store: { chatSlice: { input: string } }) =>
    store.chatSlice.input;

const messagesSelector = (store: { chatSlice: { messages: Message[] } }) =>
    store.chatSlice.messages;

export { messageInputSelector, messagesSelector };