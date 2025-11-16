import { FaHeart, FaHeartBroken, FaStar } from 'react-icons/fa'
import { useContext } from "react";
import { FavouritesContext } from "../../UserData/UserFavouritesContext";
import { ShoppingCartContext } from '../../UserData/UserShoppingCartContext';
import './ProductCard.css'

const ProductCard = ({Id, Price, OldPrice, CompanyName, ProductName, Rating, ReviewsCount, Image}) => {
  function CheckIfDiscountAvailable(){
    if(OldPrice !== undefined){
      return(
        <>
          <h3>{Price}$</h3>
          <h5>{OldPrice}$</h5>
        </>
      )
    } else{
      return <h3>{Price}$</h3>
    }
  }

  const { favourites, addFavourite, removeFavourite } = useContext(FavouritesContext);
  const { addProductToSC } = useContext(ShoppingCartContext);

  const isFav = favourites.includes(Id);

  const AddToFavourites = () => {
    addFavourite(Id)
  }

  const RemoveFromFavourites = () => {
    removeFavourite(Id)
  }

  const AddToUserShoppingCart = () => {
    addProductToSC(Id);
  }
  
  return (
    <div className="ProductCard">
        {isFav ? <button className='UnfavouriteButton' onClick={RemoveFromFavourites}><FaHeartBroken/></button> :
        <button className='FavouriteButton' onClick={AddToFavourites}><FaHeart/></button>}
        
        <div className='Preview' style={{ backgroundImage: `url(../${Image})`}}></div>
        <div className='Info'>
            <div className='PriceSection'>
                {CheckIfDiscountAvailable()}
            </div>
            <div className='Title'>
              <p>{CompanyName} /{ProductName}</p>
            </div>
            <div className='Reviews'>
              <FaStar/>{Rating} * {ReviewsCount} reviews
            </div>
        </div>
        <button className='AddToCart' onClick={AddToUserShoppingCart}>Add to cart</button>
    </div>
  )
}

export default ProductCard
