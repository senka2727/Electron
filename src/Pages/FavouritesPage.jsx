import { useContext } from "react";
import { FavouritesContext } from "../UserData/UserFavouritesContext";
import ProductCard from '../Components/ProductCard/ProductCard'
import ProductsData from '../data/ProductsData.js'
import './FavouritesPage.css'

const FavouritesPage = () => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <section className='FavouritesPage'>
        <h2>Products marked as your favourites:</h2>
        {favourites.length === 0 && (
                  <div className='EmptyFavouritesContainer'>
                    <h3>Click the heart button when your mouse is over a product to add it to your favorites.</h3>
                  </div>
                )}
        <div className='Container'>
          {favourites.map(ProductId => (
                  <ProductCard 
                  Id={ProductId} 
                  Price={ProductsData[ProductId].Price} 
                  OldPrice={ProductsData[ProductId].OldPrice} 
                  CompanyName={ProductsData[ProductId].CompanyName}
                  ProductName={ProductsData[ProductId].ProductName} 
                  Rating={ProductsData[ProductId].Rating} 
                  ReviewsCount={ProductsData[ProductId].ReviewsCount} 
                  Image={ProductsData[ProductId].Image}/>))
          }
          </div>
    </section>
  )
}

export default FavouritesPage
