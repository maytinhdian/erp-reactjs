import { useContext, createContext, useState } from "react";

const StateContext = createContext({
  currentUser: {},
  userToken: null,
  surveys:[],
  setCurrentUser: () => {},
  setUserToken: () => {},
});

export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN')||'123'); //Sử dụng token để xác định trạng thái đăng nhập
  

  const setUserToken = (token)=>{
    if (token) {
      localStorage.setItem('TOKEN',token)
    }
    else{
      localStorage.removeItem('TOKEN')
    }
    _setUserToken(token);
  }

  return (
    <StateContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userToken,
        setUserToken,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
