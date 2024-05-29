import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { post } from '../api/apiService';
const Signup = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const [signupForm, setSignupForm] = useState({
        name: '',
        contact: '',
        address: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });
    const [message, setMessage] = useState('');

    const handleRegisterClick = () => {
        setIsActive(true);
    };

    const handleLoginClick = () => {
        setIsActive(false);
    };

    const handleSignupChange = (e) => {
        const { name, value } = e.target;
        setSignupForm({
            ...signupForm,
            [name]: value,
        });
    };

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginForm({
            ...loginForm,
            [name]: value,
        });
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        if (signupForm.password !== signupForm.confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
        try {
            const response = await post('/register', signupForm); // Adjust endpoint as needed
            if (response) {
                toast.success('Signup successful');
                navigate('/chooseDonor')
            } else {
                toast.success('Signup successful');
            }
        } catch (error) {
            toast.error('Signup failed');
        }
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        console.log('Login form data:', loginForm); // Log form data for debugging

        post('/login', loginForm)
            .then(response => {
                console.log(response.message, 'response');
                if (response) {
                    localStorage.setItem('token', response.data.token);
                    toast.success('Login successful');
                    navigate('/chooseDonor');
                } else {
                    toast.error('Login failed');
                }
            })
            .catch(error => {
                toast.error('Login failed');
                console.log(error,'ooooooooooooooooooo');
               
            });
    };


    return (
        <div className='signup'>
            <div className={`container ${isActive ? 'active' : ''}`} id="container">
                <div className="form-container sign-up">
                    <form onSubmit={handleSignupSubmit}>
                        <h1>Create Account</h1>
                        <span>or use your email for registration</span>
                        <input type="text" name="name" placeholder="Name" value={signupForm.name} onChange={handleSignupChange} required />
                        <input type="number" name="contact" placeholder="Contact" value={signupForm.contact} onChange={handleSignupChange} required />
                        <input type="text" name="address" placeholder="Address" value={signupForm.address} onChange={handleSignupChange} required />
                        <input type="email" name="email" placeholder="Email" value={signupForm.email} onChange={handleSignupChange} required />
                        <input type="password" name="password" placeholder="Password" value={signupForm.password} onChange={handleSignupChange} required />
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={signupForm.confirmPassword} onChange={handleSignupChange} required />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form onSubmit={handleLoginSubmit}>
                        <h1>Sign In</h1>
                        <span>or use your email password</span>
                        <input type="email" name="email" placeholder="Email" value={loginForm.email} onChange={handleLoginChange} required />
                        <input type="password" name="password" placeholder="Password" value={loginForm.password} onChange={handleLoginChange} required />
                        <Link to="/forgotPassword">Forget Your Password?</Link>
                        <button type="submit">Sign In</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your Username and Password</p>
                            <button type="button" className="hidden" onClick={handleLoginClick}>Sign In</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hey Friend! New here ??</h1>
                            <p>Enter your personal details to use all of the site features</p>
                            <button type="button" className="hidden" onClick={handleRegisterClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
                <ToastContainer/>
            </div>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Signup;
