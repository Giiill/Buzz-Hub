import { createContext, useState, useEffect, PropsWithChildren } from "react";

type UserContextType = {
  data: any,
  isLoading: boolean,
  userName: string,
};

const UserContext = createContext<UserContextType>({ data: {}, isLoading: true, userName: '' });

const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState();
  const userName = 'Niki';

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then(res => res.json())
      .then(data => { setData(data) })
  }, []);


  return (
    <UserContext.Provider value={{ data, isLoading: !data, userName }}>
      {children}
    </UserContext.Provider>
  )
};

export {
  UserProvider,
  UserContext
}