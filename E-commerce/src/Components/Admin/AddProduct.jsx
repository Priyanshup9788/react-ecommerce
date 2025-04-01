import React, { useState } from 'react'
import AdminHeader from './AdminHeader'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/actions';

const AddProduct = () => {
    let dispatch = useDispatch();
    let allProd = useSelector((state)=>state.product.product);
    const [allProducts,setAllProducts] = useState(allProd);
    const [newProduct,setNewProduct]= useState({});

    const onFormChange = (e)=>{
        e.preventDefault()
        console.log(e.target.name + " : "+ e.target.value)
        setNewProduct({...newProduct,[e.target.name]:e.target.value})
    }

    const onFormSubmit=(e)=>{
        e.preventDefault();
        if(!newProduct.name || !newProduct.price || !newProduct.description || !newProduct.category || !newProduct.image)
        {
            alert("add all details");
            return;
        }
        let newId = allProducts.length > 0 ? Math.max(...allProducts.map((prod) => prod.id) )+ 1 : 1;

        setNewProduct({...newProduct,id:newId});

        dispatch(addProduct(newProduct));

        setNewProduct({})

    }
  return (
    <>
    <AdminHeader></AdminHeader>
    <section class="product-form">
        
                <form onSubmit={(e)=>onFormSubmit(e)}>
                    <label for="product-name">Product Name:</label>
                    <input type="text" onChange={(e)=>onFormChange(e)} id="product-name" name="name" required/>
                    
                    <label for="product-price">Price ($):</label>
                    <input type="number" onChange={(e)=>onFormChange(e)} id="product-price" name="price" required/>
                    
                    <label for="product-category">Category:</label>
                    <select id="product-category" onChange={(e)=>onFormChange(e)} name="category">
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Kids">Kids</option>
                    </select>
                    
                    <label for="product-description">Description:</label>
                    <textarea id="product-description" onChange={(e)=>onFormChange(e)} name="description" rows="4" required></textarea>
                    
                    <label for="product-image">Upload Image Link:</label>
                    <input type="text" id="product-image" onChange={(e)=>onFormChange(e)} name="image" required/>
                    
                    <button type="submit" class="btn">Add Product</button>
                </form>
            </section>
            </>
  )
}

export default AddProduct