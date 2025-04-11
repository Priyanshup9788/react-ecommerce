import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import {emailjs} from 'emailjs-com'

const ForgotPassword = () => {

    let userlength = useSelector((state) => state.user.user)
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');

    const onFormChange = (e) => {
        setEmail( e.target.value )
    }

    const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

    const onFormSubmit = (e) => {
        e.preventDefault();

        const generatedOtp = generateOTP();
        setOtp(generatedOtp);

        const templateParams = {
            to_email: email,
            otp: generatedOtp,
        };

        emailjs
            .send('your_service_id', 'template_320drwk', templateParams, 'bcb6-tmycmeWOXxuh8qJB')
            .then(
                (response) => {
                    console.log('Email sent:', response.status, response.text);
                    setStep(2);
                },
                (err) => {
                    console.error('Failed to send email:', err);
                }
            );

    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Forgot Password</h2>
                <form onSubmit={(e) => onFormSubmit(e)} method="post">

                    <div className="input-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" onChange={(e) => onFormChange(e)} name="email" required placeholder="admin@example.com" />
                    </div>

                    <button type="submit" className="btn-login">Verify Email</button>
                    <div className="login-footer">
                        <p>Already Have an account? <Link to="/login/">LogIn</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword