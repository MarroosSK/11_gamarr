import { useState, createContext } from "react";
import { ChildTypes } from "../types/types";

//dark mode
export interface DarkModeContextTypes {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultState = {
  darkMode: false,
  setDarkMode: (darkMode) => !darkMode, 
} as DarkModeContextTypes

export const DarkModeContext = createContext(defaultState);

export const DarkModeContextProvider = ({ children }: ChildTypes) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);


  return (
    <DarkModeContext.Provider value={ {darkMode, setDarkMode} }>
      {children}
    </DarkModeContext.Provider>
  );
};
