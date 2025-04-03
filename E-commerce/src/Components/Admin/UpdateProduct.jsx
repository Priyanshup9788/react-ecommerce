import React, { useState } from 'react'
import AdminHeader from './AdminHeader'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, updateProduct } from '../../redux/actions';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    let navigate = useNavigate();
    let id=useParams();
    let dispatch = useDispatch();
    let allProd = useSelector((state)=>state.product);
    const [allProducts,setAllProducts] = useState(allProd.product);
    const [newProduct,setNewProduct]= useState(()=>{
        let product = allProducts.filter((prod)=> prod.id==id.prodid);
        return product[0];
    });

    console.log(newProduct)



    const onFormChange = (e)=>{
        setNewProduct({...newProduct,[e.target.name]:e.target.value})
    }

    const onFormSubmit=(e)=>{
        e.preventDefault();
        if(!newProduct.name || !newProduct.price || !newProduct.description || !newProduct.category || !newProduct.image)
        {
            alert("add all details");
            return;
        }
      
        let product = {...newProduct};
        console.log(product)

        dispatch(updateProduct(product));
        setAllProducts([...allProducts,product])

        setNewProduct({})

        // navigate("/view")

    }
  return (
    <>
    <AdminHeader></AdminHeader>
    <section class="product-form">
        
                <form onSubmit={(e)=>onFormSubmit(e)}>
                    <label for="product-name">Product Name:</label>
                    <input type="text" onChange={(e)=>onFormChange(e)} id="product-name" value={newProduct.name ? newProduct.name : ""} name="name" required/>
                    
                    <label for="product-price">Price ($):</label>
                    <input type="number" onChange={(e)=>onFormChange(e)} id="product-price" value={newProduct.price ? newProduct.price : ""} name="price" required/>
                    
                    <label for="product-category">Category:</label>
                    <select id="product-category" onChange={(e)=>onFormChange(e)} name="category">
                        <option value="">Select Category</option>
                        <option value="Men" selected={newProduct.category=="Men"?"selected":""}>Men</option>
                        <option value="Women" selected={newProduct.category=="Women"?"selected":""}>Women</option>
                        <option value="Kids" selected={newProduct.category=="Kids"?"selected":""}>Kids</option>
                    </select>
                    
                    <label for="product-description">Description:</label>
                    <textarea id="product-description" value={newProduct.description ? newProduct.description : ""} onChange={(e)=>onFormChange(e)} name="description" rows="4" required></textarea>
                    
                    <label for="product-image">Upload Image Link:</label>
                    <input type="text" id="product-image" value={newProduct.image ? newProduct.image : ""} onChange={(e)=>onFormChange(e)} name="image" required/>
                    
                    <button type="submit" class="btn">Update Product</button>
                </form>
            </section>
            </>
  )
}

export default UpdateProduct