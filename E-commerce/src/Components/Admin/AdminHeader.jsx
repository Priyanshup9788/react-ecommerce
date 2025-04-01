import React from 'react'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
  return (
    <nav>
            <ul style={{justifyContent:"center"}}>
    
                <li><Link to="/add"><a>Add</a></Link></li>
                <li><Link to="/view"><a>View</a></Link></li>
            </ul>
        </nav>
  )
}

export default AdminHeader