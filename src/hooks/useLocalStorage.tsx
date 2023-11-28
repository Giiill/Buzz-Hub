import { useEffect, useState } from "react";

const useLocalStorage = (key: string, initialValue: any) => {
    // Attempt to get a value from local storage for a given key
    const storedValue = localStorage.getItem(key);

    // If the value exists in the local database, parse it from JSON, otherwise use the initial value
    let initial;
    try {
        initial = storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
        console.error(`Error parsing JSON for key ${key}:`, error);
        initial = initialValue;
    }

    // Create a state, create it with an initial value
    const [value, setValue] = useState(initial);

    // Use useEffect to automatically save a value to local storage when it changes
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Error saving to local storage for key ${key}:`, error);
        }
    }, [key, value]); // Specify dependencies to avoid endless update loops

    // Return an object with the current value and a function to change it
    return { value, setValue };
};

export { useLocalStorage };