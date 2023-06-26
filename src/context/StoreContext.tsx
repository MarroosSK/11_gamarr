import { useState, createContext, Dispatch, SetStateAction } from "react";
import { storeProductsData } from "../helpers/data";
import { ChildTypes, MyGameType } from "../types/types";

export interface MyStoreContextTypes {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  filterByGenre: string;
  setFilterByGenre: Dispatch<SetStateAction<string>>;
  filterByPlatform: string;
  setFilterByPlatform: Dispatch<SetStateAction<string>>;
  filterByStudio: string;
  setFilterByStudio: Dispatch<SetStateAction<string>>;
  filterByStatus: string;
  setFilterByStatus: Dispatch<SetStateAction<string>>;
  filterByTrendy: MyGameType[];
  setFilterByTrendy: Dispatch<SetStateAction<MyGameType[]>>;
  filterByBestseller: MyGameType[];
  setFilterByBestseller: Dispatch<SetStateAction<MyGameType[]>>;
  searchGame: MyGameType[];
}

const defaultState: MyStoreContextTypes = {
  searchValue: "",
  setSearchValue: () => {},
  filterByGenre: "",
  setFilterByGenre: () => {},
  filterByPlatform: "",
  setFilterByPlatform: () => {},
  filterByStudio: "",
  setFilterByStudio: () => {},
  filterByStatus: "",
  setFilterByStatus: () => {},
  filterByTrendy: [],
  setFilterByTrendy: () => {},
  filterByBestseller: [],
  setFilterByBestseller: () => {},
  searchGame: [],
};

export const StoreContext = createContext<MyStoreContextTypes>(defaultState);

export const StoreContextProvider = ({ children }: ChildTypes) => {
  // search
  const [searchValue, setSearchValue] = useState("");

  // filter
  const [filterByGenre, setFilterByGenre] = useState("all");
  const [filterByPlatform, setFilterByPlatform] = useState("all");
  const [filterByStudio, setFilterByStudio] = useState("all");
  const [filterByStatus, setFilterByStatus] = useState("all");


    //trendy & bestseller
    const [filterByTrendy, setFilterByTrendy] = useState<MyGameType[]>(storeProductsData.filter((filteredGame) => filteredGame.status === "trending"))
    const [filterByBestseller, setFilterByBestseller] = useState<MyGameType[]>(storeProductsData.filter((filteredGame) => filteredGame.status === "bestseller"))

  // search game
  const searchGame = storeProductsData.filter((game) =>
    game.title.toLowerCase().startsWith(searchValue.toLowerCase())
  );

  return (
    <StoreContext.Provider
      value={{
        searchValue,
        setSearchValue,
        searchGame,
        filterByGenre,
        setFilterByGenre,
        filterByPlatform,
        setFilterByPlatform,
        filterByStudio,
        setFilterByStudio,
        filterByStatus,
        setFilterByStatus,
        filterByTrendy,
        setFilterByTrendy,
        filterByBestseller,
        setFilterByBestseller,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};


