import React, { useState } from 'react'
import AdminHeader from './AdminHeader'
import { useSelector } from 'react-redux';

const ViewProduct = () => {
    let allProd = useSelector((state)=>state.product);
    const [allProducts,setAllProducts] = useState(allProd.product);
    console.log(allProducts)

    return (
        <>
        <AdminHeader/>
        <div class="table-container">
            <h2>Product List</h2>
            <table class="responsive-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allProducts.map((prod,i)=>(
                        <tr>
                        <td>{prod.id}</td>
                        <td>{prod.name}</td>
                        <td>{prod.category}</td>
                        <td>${prod.price}</td>
                        <td><img src={prod.image} style={{objectFit:"cover"}} width="120px" height="120px"/></td>
                        <td>{prod.description}</td>
                        <td><button>Edit</button> <button>Delete</button></td>
                    </tr>
                    ))
                    
                    }
                
                </tbody>
            </table>
        </div>
        </>

    )
}

export default ViewProduct