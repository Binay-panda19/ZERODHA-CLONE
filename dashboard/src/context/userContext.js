import { createContext } from "react";

const UserContext = createContext({
  user,
  logout: () => {},
});


export default UserContextProvider({children}) => {
  
}