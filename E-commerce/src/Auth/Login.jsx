import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    let navigate = useNavigate()
    let allUser = useSelector((state)=>state.user.user)

    const [user,setUser]=useState({});

    
        const onFormChange=(e)=>{
            setUser({...user,[e.target.name]:e.target.value})
        }
    
        const onFormSubmit = (e)=>{
            e.preventDefault();
            let result=allUser.filter((val)=>user.email==val.email && user.password == val.password)
            if(result.length > 0)
            {
                navigate("/");
            }
            else
            {
                alert("Invalid Credentials");
            }
        }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form action="#" method="post" onSubmit={(e)=>onFormSubmit(e)}>
                    <div className="input-group">
                        <label for="email">Email Address</label>
                        <input type="email" onChange={(e)=>onFormChange(e)} id="email" name="email" required placeholder="admin@example.com" />
                    </div>
                    <div className="input-group">
                        <label for="password">Password</label>
                        <input type="password" onChange={(e)=>onFormChange(e)} id="password" name="password" required placeholder="********" />
                    </div>
                    <button type="submit" className="btn-login">Login</button>
                    <div className="login-footer">
                        <p>Don't have an account? <Link to="/signup/">SignUp</Link></p>
                        <p>Forgote Password? <Link to="/forgotpass/">Reset Here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login