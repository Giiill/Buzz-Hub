import { useLocalStorage } from "./useLocalStorage"

const useChatLocalStorage = (key: string, initialValue: any) => {
    const {value, setValue} = useLocalStorage(key, initialValue);
    return { value, setValue };
};

export { useChatLocalStorage };