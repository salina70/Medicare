import { createContext, useState } from "react";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isopen, setisopen] = useState(false);

  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <PopupContext.Provider value={{ isopen, toggle }}>
      {children}
    </PopupContext.Provider>
  );
};
