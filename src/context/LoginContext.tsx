import { useState,  createContext } from "react";
import { ChildTypes } from "../types/types";

export interface LoginFormTypes {
  nickname: string;
  password: string;
}

export interface LoginContextTypes {
  loginForm: LoginFormTypes;
  setLoginForm: React.Dispatch<React.SetStateAction<LoginFormTypes>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultState: LoginContextTypes = {
  loginForm: {
    nickname: "",
    password: "",
  },
  setLoginForm: () => {}, 
  isLoggedIn: false,
  setIsLoggedIn: () => {},
};

export const LoginContext = createContext<LoginContextTypes>(defaultState);

export const LoginContextProvider = ({ children }: ChildTypes) => {
  const [loginForm, setLoginForm] = useState<LoginFormTypes>({
    nickname: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);


  

  return (
    <LoginContext.Provider
      value={{ loginForm, setLoginForm, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </LoginContext.Provider>
  );
};
