import React from 'react'

const Cart = () => {
  return (
    <section class="cart-container">
        <h2>Your Shopping Cart</h2>
        <table class="cart-table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="product-info">
                        <img src="https://www.bonkerscorner.com/cdn/shop/files/BonkersCorner_patrick_cupcake_pink_hoodie_20_640x_crop_center.jpg?v=1738064674" alt="Stylish Jacket"/>
                        <p>Stylish Jacket</p>
                    </td>
                    <td>$49.99</td>
                    <td><input type="number" value="1" min="1"/></td>
                    <td>$49.99</td>
                    <td><button class="remove-btn">X</button></td>
                </tr>
                <tr>
                    <td class="product-info">
                        <img src="https://www.bonkerscorner.com/cdn/shop/files/BonkersCorner_patrick_cupcake_pink_hoodie_20_640x_crop_center.jpg?v=1738064674" alt="Casual Shirt"/>
                        <p>Casual Shirt</p>
                    </td>
                    <td>$29.99</td>
                    <td><input type="number" value="1" min="1"/></td>
                    <td>$29.99</td>
                    <td><button class="remove-btn">X</button></td>
                </tr>
            </tbody>
        </table>
        <div class="cart-summary">
            <h3>Cart Summary</h3>
            <p>Subtotal: <span>$79.98</span></p>
            <p>Shipping: <span>Free</span></p>
            <p>Total: <strong>$79.98</strong></p>
            <button class="checkout-btn">Proceed to Checkout</button>
        </div>
    </section>
  )
}

export default Cart