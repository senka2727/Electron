import { useContext } from "react";
import { ShoppingCartContext } from "../UserData/UserShoppingCartContext.jsx";
import ProductsData from '../data/ProductsData.js'
import { Link } from 'react-router-dom'
import SCProductCard from "../Components/ProductCard/ShoppingCartProductCard/SCProductCard.jsx";
import './CartPage.css'

const CartPage = () => {
  const { shoppingCart, getTotalSCCost } = useContext(ShoppingCartContext);

  return (
    <section className='CartPage'>
        <div className='ProductsContainer'>
          {shoppingCart.map(ProductId => (
                        <SCProductCard
                            Id={ProductId} 
                          Price={ProductsData[ProductId].Price} 
                          OldPrice={ProductsData[ProductId].OldPrice} 
                          CompanyName={ProductsData[ProductId].CompanyName}
                          ProductName={ProductsData[ProductId].ProductName} 
                          Rating={ProductsData[ProductId].Rating} 
                          ReviewsCount={ProductsData[ProductId].ReviewsCount} 
                          Image={ProductsData[ProductId].Image}/>
          ))}
        </div>


        <div className='CheckoutContainer'> 
          <h3>Checkout</h3>
          <Link to={"/Error404"} className='Link'>Choose shipping address</Link>

          <div className='Divider'></div>
          <div className="CheckoutElement">
            <h4 className="LeftText">Total items, </h4>
            <h4 className="RightText">{shoppingCart.length}</h4>
          </div>

          <div className="CheckoutElement">
            <h4 className="LeftText">Total cost</h4>
            <h4 className="RightText">{getTotalSCCost()}$</h4>
          </div>

          <Link to={"/Error404"} className="OrderButton">Order</Link>
        </div>
    </section>
  )
}

export default CartPage
