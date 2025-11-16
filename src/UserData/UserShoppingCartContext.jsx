import { createContext, useState, useEffect } from "react";
import UserShoppingCartData from "./UserShoppingCart.js";
import ProductsData from "../data/ProductsData.js";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState(() => {
    const stored = localStorage.getItem('USER_SHOPPING_CART_DATA');
    return stored ? JSON.parse(stored) : UserShoppingCartData;
  });

  useEffect(() => {
    const data = window.localStorage.getItem('USER_SHOPPING_CART_DATA');
    if(data){
      setShoppingCart(JSON.parse(data));
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('USER_SHOPPING_CART_DATA', JSON.stringify(shoppingCart));
  }, [shoppingCart])

  const addProductToSC = (id) => {
    setShoppingCart(prev =>
      [...prev, id]
    );
  };

  const removeProductFromSC = (id) => {
    setShoppingCart(prev => {
      const index = prev.indexOf(id);
      if (index === -1) return prev; // нет совпадений

      const newArr = [...prev];
      newArr.splice(index, 1); // удалить только первое совпадение
      return newArr;});
  };

  const getTotalSCCost = () => {
    let TotalCost = 0;

    for(let i = 0; i < shoppingCart.length; i++){
      TotalCost += ProductsData[shoppingCart[i]].Price;
    }

    return TotalCost;
  };

  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, addProductToSC, removeProductFromSC, getTotalSCCost }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};