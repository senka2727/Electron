import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FavouritesProvider } from './UserData/UserFavouritesContext.jsx'
import { ShoppingCartProvider } from './UserData/UserShoppingCartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <FavouritesProvider>
  <ShoppingCartProvider>
    <App />
  </ShoppingCartProvider>
  </FavouritesProvider>
  </StrictMode>,
)
