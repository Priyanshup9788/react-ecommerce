import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../redux/actions';
import {Link} from 'react-router-dom'

const Signup = () => {

    let userlength=useSelector((state)=>state.user.user)
    let dispatch = useDispatch()
    const [newUser,setNewUser] = useState({});

    const onFormChange=(e)=>{
        setNewUser({...newUser,[e.target.name]:e.target.value})
    }

    const onFormSubmit = (e)=>{
        e.preventDefault();
        let newId = userlength.length > 0 ? Math.max(userlength.map(user=>user.id))+1 : 1
        let user = {...newUser,id:newId}
        dispatch(signUp(user))
        setNewUser({})
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Sign Up</h2>
                <form onSubmit={(e)=>onFormSubmit(e)} method="post">
                <div className="input-group">
                        <label for="name">UserName</label>
                        <input type="text" id="name" onChange={(e)=>onFormChange(e)} name="name" required placeholder="User name" />
                    </div>
                    <div className="input-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" onChange={(e)=>onFormChange(e)} name="email" required placeholder="admin@example.com" />
                    </div>
                    <div className="input-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" onChange={(e)=>onFormChange(e)} name="password" required placeholder="********" />
                    </div>
                    <button type="submit" className="btn-login">SignUp</button>
                    <div className="login-footer">
                        <p>Already Have an account? <Link to="/login/">LogIn</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup