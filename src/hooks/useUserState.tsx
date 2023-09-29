import { UserContext } from "../context/userContext";
import { useContext } from "react";

function useUserState() {
    const {data, isLoading, userName} = useContext(UserContext); 
    return {data, isLoading, userName};
};

export  { useUserState };