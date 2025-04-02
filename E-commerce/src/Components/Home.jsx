import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Home = () => {

    let allProd = useSelector((state) => state.product);
    const [allProducts, setAllProducts] = useState(allProd.product);

    return (
        <>
            <section className="banner">
                <img src="https://cdn.leonardo.ai/users/68554cba-c9ca-4875-831a-3ab508f5f2f3/generations/d8d9eff9-87ae-4a34-b7fa-aabffcb03a50/segments/1:4:1/Flux_Dev_Create_a_visually_appealing_banner_for_a_clothing_web_0.jpeg" style={{ height: "90vh" }} alt="Fashion Banner" />
                <div className="banner-text">
                    <h2>Exclusive Collection 2025</h2>
                    <p>Upgrade your wardrobe with the latest trends</p>
                    <a href="#shop" className="btn">Shop Now</a>
                </div>
            </section>

            <section className="categories">
                <h2 style={{ textAlign: "center" }}>Shop by Category</h2>
                <div className="category-container">
                    <div className="category">
                        <img src="https://static.thenounproject.com/png/860317-200.png" alt="Men's Fashion" />
                        <h3>Men</h3>
                    </div>
                    <div className="category">
                        <img src="https://static.thenounproject.com/png/1111657-200.png" alt="Women's Fashion" />
                        <h3>Women</h3>
                    </div>
                    <div className="category">
                        <img src="https://static.thenounproject.com/png/135651-200.png" alt="Kids' Fashion" />
                        <h3>Kids</h3>
                    </div>
                </div>
            </section>

            <section className="featured">
                <h2 style={{ textAlign: "center" }}>Men's Products</h2>
                <div className="product-grid">
                    {allProducts.filter((prod) => {
                        if (prod.category == "Men") {
                            return prod;
                        }
                    }).map((prod)=>(
                        <div className="product-card">
                        <img src={prod.image} alt="Product 1" />
                        <h3>{prod.name}</h3>
                        <p>${prod.price}</p>
                    </div>
                    ))}
                   
                </div>
            </section>

            <section className="featured">
                <h2 style={{ textAlign: "center" }}>Women's Products</h2>
                <div className="product-grid">
                {allProducts.filter((prod) => {
                        if (prod.category == "Women") {
                            return prod;
                        }
                    }).map((prod)=>(
                        <div className="product-card">
                        <img src={prod.image} alt="Product 1" />
                        <h3>{prod.name}</h3>
                        <p>${prod.price}</p>
                    </div>
                    ))}
                    
                </div>
            </section>

        </>
    )
}

export default Home