import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';
import '../styles/login.css';
import Navbar from './Navbar';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Use AuthService to handle login
            const response = await AuthService.login(username, password);
            if (response.status === 200) {
                // Handle successful login (e.g., store token, redirect)
                localStorage.setItem('token', response.data.token);
                navigate('/');
            }
        } catch (error) {
            setError('Invalid credentials');
        }
    };

    return (
        <div>
         <Navbar/>
        <h2>Travel the World: Your All-in-One Travel Companion Plan, Book, Explore!</h2>
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div className="error">{error}</div>}
                <button type="submit">Login</button>
            </form>
        </div>
        </div>
    );
};

export default Login;
