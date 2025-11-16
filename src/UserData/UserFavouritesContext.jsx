import { createContext, useState, useEffect } from "react";
import UserFavouritesData from "./UserFavourites.js";

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(() => {
    const stored = localStorage.getItem("USER_FAVOURITES_DATA");
    return stored ? JSON.parse(stored) : UserFavouritesData;
  });

  useEffect(() => {
    const data = window.localStorage.getItem('USER_FAVOURITES_DATA');
    if(data){
      setFavourites(JSON.parse(data));
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('USER_FAVOURITES_DATA', JSON.stringify(favourites));
  }, [favourites])

  const addFavourite = (id) => {
    setFavourites(prev =>
      prev.includes(id) ? prev : [...prev, id]
    );
  };

  const removeFavourite = (id) => {
    setFavourites(prev => prev.filter(f => f !== id));
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};