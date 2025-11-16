import MainBanner from '../Components/MainBanner'
import ProductCard from '../Components/ProductCard/ProductCard'

import ProductsData from '../data/ProductsData'

const HomePage = () => {
    const categories = [...new Set(ProductsData.map(item => item.Category))];
    const rows = [];

     for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        const products = ProductsData.filter(p => p.Category === category);

        rows.push(
            <div key={category}>
                <div className='Row'>
                    <h2>{category}</h2>
                </div>
                <div className='Divider'></div>

                <div className='CardsContent'>
                    {products.map(Product => (
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
            </div>
        );
    }

    return (
        <>
            <MainBanner></MainBanner>  
        
            <section className='Cards'>
                {rows}
            </section>
        </>
    )
}

export default HomePage
