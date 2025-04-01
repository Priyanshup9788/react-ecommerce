import React, { Fragment } from 'react'

const SingleProduct = () => {
    return (
        <div className="single">

            <section className="product-detail">
                <div className="product-image">
                    <img src="https://www.bonkerscorner.com/cdn/shop/files/BonkersCorner_patrick_cupcake_pink_hoodie_20_640x_crop_center.jpg?v=1738064674" alt="Stylish Jacket"/>
                </div>
                <div className="product-info">
                    <h2>Stylish Jacket</h2>
                    <p className="price">$49.99</p>
                    <p className="description">A modern, stylish jacket perfect for any season. Made from high-quality materials for comfort and durability.</p>
                    <label for="size">Size:</label>
                    <select id="size">
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>XL</option>
                    </select>
                    <button className="btn">Add to Cart</button>
                </div>
            </section>

            <section className="related-products">
                <h2>Related Products</h2>
                <div className="product-grid">
                    <div className="product-card">
                        <img src="https://www.bonkerscorner.com/cdn/shop/files/BonkersCorner_patrick_cupcake_pink_hoodie_20_640x_crop_center.jpg?v=1738064674" alt="Casual Shirt" />
                        <h3>Casual Shirt</h3>
                        <p>$29.99</p>
                        <button className="btn">View Details</button>
                    </div>
                    <div className="product-card">
                        <img src="https://www.bonkerscorner.com/cdn/shop/files/BonkersCorner_patrick_cupcake_pink_hoodie_20_640x_crop_center.jpg?v=1738064674" alt="Trendy Sneakers" />
                        <h3>Trendy Sneakers</h3>
                        <p>$59.99</p>
                        <button className="btn">View Details</button>
                    </div>
                    <div className="product-card">
                        <img src="https://www.bonkerscorner.com/cdn/shop/files/BonkersCorner_patrick_cupcake_pink_hoodie_20_640x_crop_center.jpg?v=1738064674" alt="Denim Jeans" />
                        <h3>Denim Jeans</h3>
                        <p>$39.99</p>
                        <button className="btn">View Details</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SingleProduct