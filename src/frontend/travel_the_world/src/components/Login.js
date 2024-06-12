import React, { useState } from 'react';
import AuthService from '../services/AuthService';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/login', { username, password });
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
    );
};

export default Login;
