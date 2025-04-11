import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
            <h1>Fashion Store</h1>
            <nav>
                <ul>
                    <li><Link to="/"><a href="">Home</a></Link></li>
                    <li><Link to="/product" ><a href="">Shop</a></Link></li>
                    <li><Link to="/cart"><a href="">Cart</a></Link></li>
                    <li><Link to="/add"><a href="">Admin</a></Link></li>
                    <li><Link to="/login"><a href="">Login</a></Link></li>
                </ul>
            </nav>
        </header>
  )
}

export default Header