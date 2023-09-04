import { createContext, useState, useEffect } from "react";

// интерфейс контекста который указывает какой тип данных ожидается в контексте
interface IUserContext {
    data: any; 
    isLoading: boolean;
}

// создаем конекст с типами данных из интерфейса, и сразу же тут создаем значения по умолчанию
const UserContext = createContext<IUserContext>({ data: {}, isLoading: true }); 

const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState(); 

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
  
  return (
    <UserContext.Provider value={{data, isLoading: !data}}>
      {children}
    </UserContext.Provider>
  )


}

export {
  UserProvider,
  UserContext
}