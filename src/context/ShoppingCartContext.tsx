import { useState, createContext } from "react";
import { ChildTypes, MyGameType } from "../types/types";


//shopping cart
export interface ShoppingCartContextTypes {
  myCart: MyGameType[];
  totalPrice: number;
  totalQuantity: number;
  addItemToCart: (item: MyGameType) => void;
  removeItemFromCart: (item: MyGameType) => void;
  incrementItemQuantity: (item: MyGameType) => void;
  decrementItemQuantity: (item: MyGameType) => void;
  clearCart: () => void;
}

const defaultState: ShoppingCartContextTypes = {
  myCart: [],
  totalPrice: 0,
  totalQuantity: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  incrementItemQuantity: () => {},
  decrementItemQuantity: () => {},
  clearCart: () => {},
};

export const ShoppingCartContext = createContext<ShoppingCartContextTypes>(defaultState);

export const ShoppingCartContextProvider = ({ children }: ChildTypes) => {
  const [myCart, setMyCart] = useState<MyGameType[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItemToCart = (item: MyGameType) => {
    const existingItem = myCart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCart = myCart.map((cartItem: MyGameType) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setMyCart(updatedCart);
    } else {
      const newItem = { ...item, quantity: 1 };
      setMyCart([...myCart, newItem]);
    }
    setTotalPrice(totalPrice + item.price);
    setTotalQuantity(totalQuantity + 1);
  };

  const removeItemFromCart = (item: MyGameType) => {
    const updatedCart = myCart.filter((cartItem) => cartItem.id !== item.id);
    setMyCart(updatedCart);
    setTotalPrice(totalPrice - item.price * item.quantity);
    setTotalQuantity(totalQuantity - item.quantity);
  };

  const incrementItemQuantity = (item: MyGameType) => {
    const updatedCart = myCart.map((cartItem: MyGameType) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setMyCart(updatedCart);
    setTotalPrice(totalPrice + item.price);
    setTotalQuantity(totalQuantity + 1);
  };

  const decrementItemQuantity = (item: MyGameType) => {
    const existingItem = myCart.find((cartItem: MyGameType) => cartItem.id === item.id);
    if (existingItem?.quantity === 1) {
      removeItemFromCart(item);
    } else {
      const updatedCart = myCart.map((cartItem: MyGameType) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });
      setMyCart(updatedCart);
      setTotalPrice(totalPrice - item.price);
      setTotalQuantity(totalQuantity - 1);
    }
  };

  const clearCart = () => {
    setMyCart([]);
    setTotalPrice(0);
    setTotalQuantity(0);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        myCart,
        totalPrice,
        totalQuantity,
        addItemToCart,
        removeItemFromCart,
        incrementItemQuantity,
        decrementItemQuantity,
        clearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
