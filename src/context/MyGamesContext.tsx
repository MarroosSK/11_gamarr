import { useState, createContext } from "react";
import { myLibraryData } from "../helpers/data";
import { ChildTypes, MyGameType } from "../types/types";


export interface MyGamesContextTypes {
  myGames: MyGameType[];
  setMyGames: React.Dispatch<React.SetStateAction<MyGameType[]>>;
}

const defaultState: MyGamesContextTypes = {
  myGames: myLibraryData,
  setMyGames: () => {},
};

export const MyGamesContext = createContext<MyGamesContextTypes>(defaultState);

export const MyGamesContextProvider = ({ children }: ChildTypes) => {
  const [myGames, setMyGames] = useState<MyGameType[]>(myLibraryData);

  return (
    <MyGamesContext.Provider value={{ myGames, setMyGames }}>
      {children}
    </MyGamesContext.Provider>
  );
};
