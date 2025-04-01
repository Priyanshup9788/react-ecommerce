import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import Product from './Components/Product'
import SingleProduct from './Components/SingleProduct'
import Cart from './Components/Cart'
import AddProduct from './Components/Admin/AddProduct'
import ViewProduct from './Components/Admin/ViewProduct'

function App() {

  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/product' element={<Product></Product>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/single-product' element={<SingleProduct></SingleProduct>}/>
        <Route path="/add" element={<AddProduct></AddProduct>}/>
        <Route path='/view' element={<ViewProduct/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
