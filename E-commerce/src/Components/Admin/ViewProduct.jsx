import React from 'react'
import AdminHeader from './AdminHeader'

const ViewProduct = () => {
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
                        <th>Stock</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Product 1</td>
                        <td>Clothing</td>
                        <td>$29.99</td>
                        <td>In Stock</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deleniti natus ea, voluptates nulla at consequuntur quia. Asperiores ipsum eaque, et amet qui iure. Repellendus mollitia fuga numquam odit dolorum.</td>
                        <td><button>Edit</button> <button>Delete</button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Product 1</td>
                        <td>Clothing</td>
                        <td>$29.99</td>
                        <td>In Stock</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deleniti natus ea, voluptates nulla at consequuntur quia. Asperiores ipsum eaque, et amet qui iure. Repellendus mollitia fuga numquam odit dolorum.</td>
                        <td><button>Edit</button> <button>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>

    )
}

export default ViewProduct