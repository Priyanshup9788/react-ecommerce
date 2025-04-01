import React from 'react'

const Home = () => {
    return (
        <>
             <section className="banner">
        <img src="https://cdn.leonardo.ai/users/68554cba-c9ca-4875-831a-3ab508f5f2f3/generations/d8d9eff9-87ae-4a34-b7fa-aabffcb03a50/segments/1:4:1/Flux_Dev_Create_a_visually_appealing_banner_for_a_clothing_web_0.jpeg" style={{height:"90vh"}} alt="Fashion Banner" />
        <div className="banner-text">
            <h2>Exclusive Collection 2025</h2>
            <p>Upgrade your wardrobe with the latest trends</p>
            <a href="#shop" className="btn">Shop Now</a>
        </div>
    </section>
    
    <section className="categories">
        <h2 style={{textAlign:"center"}}>Shop by Category</h2>
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
        <h2 style={{textAlign:"center"}}>Men's Products</h2>
        <div className="product-grid">
            <div className="product-card">
                <img src="https://www.bonkerscorner.com/cdn/shop/files/Bonkerscorner__Bugs__Funky__Varsity__Jacket_10_640x_crop_center.jpg?v=1734589450" alt="Product 1" />
                <h3>Stylish Jacket</h3>
                <p>$49.99</p>
            </div>
            <div className="product-card">
                <img src="https://www.bonkerscorner.com/cdn/shop/files/dark-green-regular-fit-shirt-xs-bonkerscorner-store-33696818331748_640x_crop_center.jpg?v=1728982295" alt="Product 2" />
                <h3>Casual Shirt</h3>
                <p>$29.99</p>
            </div>
            <div className="product-card">
                <img src="https://www.bonkerscorner.com/cdn/shop/files/Bonkerscorner_caped_crusader_stripped_t-shirt_15_640x_crop_center.jpg?v=1741170608" alt="Product 3" />
                <h3>Trendy Sneakers</h3>
                <p>$59.99</p>
            </div>
        </div>
    </section>

    <section className="featured">
        <h2 style={{textAlign:"center"}}>Women's Products</h2>
        <div className="product-grid">
            <div className="product-card">
                <img src="https://www.bonkerscorner.com/cdn/shop/files/BonkersCorner_patrick_cupcake_pink_hoodie_20_640x_crop_center.jpg?v=1738064674" alt="Product 1" />
                <h3>Hoodie</h3>
                <p>$49.99</p>
            </div>
            <div className="product-card">
                <img src="https://www.bonkerscorner.com/cdn/shop/files/Bonkerscorner_xmas_stitch_sweatshirt_1_640x_crop_center.jpg?v=1734502515" alt="Product 2" />
                <h3>Oversized T-shirt</h3>
                <p>$29.99</p>
            </div>
            <div className="product-card">
                <img src="https://www.bonkerscorner.com/cdn/shop/files/Bonkerscorner_pale_bloom_set_7_640x_crop_center.jpg?v=1739787669" alt="Product 3" />
                <h3>cord-set</h3>
                <p>$59.99</p>
            </div>
        </div>
    </section>
    
        </>
    )
}

export default Home