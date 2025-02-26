import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';
import '../styles/register.css';
import Navbar from './Navbar';
import Slideshow from './Slideshow';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [confirmRegistration, setConfirmRegistration] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(''); // State for error messages
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        // Basic validation
        if (password.length < 8) {
            setError('Password must be at least 8 characters long.');
            return;
        }

        try {
            const user = {
                username,
                password,
                userEmail,
                userFirstName,
                userLastName,
                phoneNumber,
                userType: 'user',
                confirmRegistration
            };

            const response = await AuthService.register(user);
            setMessage('Registration successful! Redirecting to login...');
            setError('');
            setTimeout(() => {
                navigate('/');
            }, 2000);

            // Clear form fields
            setUsername('');
            setPassword('');
            setUserEmail('');
            setUserFirstName('');
            setUserLastName('');
            setPhoneNumber('');
            setConfirmRegistration(false);
        } catch (err) {
            console.error('Registration failed', err);
            setError('Registration failed. Please try again.');
            setMessage('');
        }
    };

    return (
        <div>
            <Navbar />
            <Slideshow />
            <div className="register-container">
                <h2 className="register-title">Register</h2>
                <form className="register-form" onSubmit={handleRegister}>
                    <div className="register-form-group">
                        <label className="register-label">Username:</label>
                        <input
                            className="register-input"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="register-form-group">
                        <label className="register-label">Password:</label>
                        <input
                            className="register-input register-password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="register-form-group">
                        <label className="register-label">Email:</label>
                        <input
                            className="register-input"
                            type="email"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="register-form-group">
                        <label className="register-label">First Name:</label>
                        <input
                            className="register-input"
                            type="text"
                            value={userFirstName}
                            onChange={(e) => setUserFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="register-form-group">
                        <label className="register-label">Last Name:</label>
                        <input
                            className="register-input"
                            type="text"
                            value={userLastName}
                            onChange={(e) => setUserLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="register-form-group">
                        <label className="register-label">Phone Number:</label>
                        <input
                            className="register-input"
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="register-form-group">
                        <label className="register-label">
                            <input
                                className="register-checkbox"
                                type="checkbox"
                                checked={confirmRegistration}
                                onChange={(e) => setConfirmRegistration(e.target.checked)}
                            />
                            Confirm Registration
                        </label>
                    </div>
                    <button className="register-button" type="submit">Register</button>
                </form>
                {message && <p className="register-success-message">{message}</p>}
                {error && <p className="register-error-message">{error}</p>}
            </div>
        </div>
    );
};

export default Register;
