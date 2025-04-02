import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Product = () => {
    let allProd = useSelector((state) => state.product);
    const [allProducts, setAllProducts] = useState(allProd.product);

  return (
    <>

    <section className="shop-banner">
        <img src="https://cdn.leonardo.ai/users/68554cba-c9ca-4875-831a-3ab508f5f2f3/generations/9f294564-7386-48fc-b572-129813fd5427/segments/4:4:1/Flux_Dev_Create_a_vibrant_and_modern_banner_for_a_clothing_web_3.jpeg" style={{height:"90vh", width:"100%" ,objectFit:"cover"}}  alt="Shop Banner"/>
        <div className="product-banner">
            <h2>Discover Your Style</h2>
            <p>Browse our latest collection and find your perfect outfit.</p>
        </div>
    </section>
    
    <section className="shop-filters">
        <label for="category">Category:</label>
        <select id="category">
            <option>All</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
        </select>
        
        <label for="price">Price:</label>
        <select id="price">
            <option>All</option>
            <option>Under $50</option>
            <option>$50 - $100</option>
            <option>Above $100</option>
        </select>
    </section>
    
    <section className="shop-products">
        <div className="product-grid">
            {
                allProducts.map((prod)=>(
                    <div className="product-card">
                <img src={prod.image} alt="Product 1"/>
                <h3>{prod.name}t</h3>
                <p>${prod.price}</p>
                <a href="#" className="btn">Add to Cart</a>
            </div>
                ))
            }
            
        </div>
    </section>
    </>
  )
}

export default Product