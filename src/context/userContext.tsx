import { createContext, useState, useEffect } from "react";

// типс контекста который указывает какой тип данных ожидается в контексте
type IUserContext = {
  data: any,
  isLoading: boolean,
  userName: string
}

// создаем конекст с типами данных из типа, и сразу же тут создаем значения по умолчанию
const UserContext = createContext<IUserContext>({ data: {}, isLoading: true, userName: 'downloading' });

const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState();
  const [userName, setUserName] = useState('downloading');

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then(res => res.json())
      .then(data => {
        setData(data)
        if (data && data.results && data.results.length > 0) {
          setUserName(data.results[0].name);
        }
      })
  }, []);


  return (
    <UserContext.Provider value={{ data, isLoading: !data, userName }}>
      {children}
    </UserContext.Provider>
  )


}

export {
  UserProvider,
  UserContext
}