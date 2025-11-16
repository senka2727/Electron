import ElectronLogo from '../assets/ElectronLogo.png';
import { FaSearch } from 'react-icons/fa';
import { FaHeart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import ProductsData from '../data/ProductsData';
import ProductCard from './ProductCard/ProductCard';

const Navbar = () => {
    const [searchContent, setSearchContent] = useState("");
    const [searchedElements, setSearchedElements] = useState([]);
    const SearchResultsElement = useRef(null);

    const UpdateSearchContent = (newValue) => {
        setSearchContent(newValue)

        if(newValue === ""){
            SearchResultsElement.current.style.display = "none";
        } else{
            SearchResultsElement.current.style.display = "grid";
            GetSearchedElements(newValue);
        }
    }

    function GetSearchedElements(value = ""){
        if(value == "") setSearchedElements([]);

        let query = value.toLowerCase();
        setSearchedElements(ProductsData.filter(item =>
            item.ProductName.toLowerCase().includes(query) ||
            item.CompanyName.toLowerCase().includes(query) ||
            item.Tags.some(tag => tag.toLowerCase().includes(query))
        ));
    }

    return (
        <>
            <nav>
                <div className="TopRow">
                    <div className="Location">
                        <p>Rostock</p>
                    </div>

                    <div className="Controls">
                        {/* <a>ENG</a>
                        <a>$</a> */}
                    </div>
                </div>


                <div className="BottomRow">
                    <div className='Logo'>
                        <Link to={"/"}><img src={ElectronLogo}></img></Link>
                    </div>

                    <div className="SearchSection">
                        <input value={searchContent} onChange={(e) => UpdateSearchContent(e.target.value)}></input>
                        {/* <button><FaSearch/></button> */}
                    </div>

                    <div className="OtherTabs">
                        <Link to={"/Favourites"} className="NavLink"><FaHeart/></Link>
                        <Link to={"/Profile"} className="NavLink"><IoPersonSharp/></Link>
                        <Link to={"/ShoppingCart"} className="NavLink"><FaShoppingCart/></Link>
                    </div>
                </div>
            </nav>

            <div className='SearchResults' ref={SearchResultsElement}>
                {searchedElements.length === 0 ? <h2>No results found :(</h2> : searchedElements.map(Product => (
                        <ProductCard
                            key={Product.id}
                            Id={Product.id}
                            Price={Product.Price}
                            OldPrice={Product.OldPrice}
                            CompanyName={Product.CompanyName}
                            ProductName={Product.ProductName}
                            Rating={Product.Rating}
                            ReviewsCount={Product.ReviewsCount}
                            Image={Product.Image}
                        />
                    ))}
            </div>
        </>
    )
}

export default Navbar