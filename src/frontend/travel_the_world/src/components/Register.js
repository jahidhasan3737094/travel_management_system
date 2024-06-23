//import React, { useState } from 'react';
//import AuthService from '../services/AuthService';
//import '../styles/register.css';
//
//const Register = () => {
//    const [username, setUsername] = useState('');
//    const [password, setPassword] = useState('');
//    const [userEmail, setUserEmail] = useState('');
//    const [userFirstName, setUserFirstName] = useState('');
//    const [userLastName, setUserLastName] = useState('');
//    const [phoneNumber, setPhoneNumber] = useState('');
//    const [userType, setUserType] = useState('user'); // Default to 'user'
//    const [confirmRegistration, setConfirmRegistration] = useState(false);
//
//    const handleRegister = async (e) => {
//        e.preventDefault();
//        try {
//            const user = {
//                username,
//                password,
//                userEmail,
//                userFirstName,
//                userLastName,
//                phoneNumber,
//                userType,
//                confirmRegistration
//            };
//            const response = await AuthService.register(user);
//            console.log(response.data);
//        } catch (error) {
//            console.error('Registration failed', error);
//        }
//    };
//
//    return (
//        <div className="content">
//            <h2>Register</h2>
//            <form onSubmit={handleRegister}>
//                <div>
//                    <label>Username:</label>
//                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
//                </div>
//                <div>
//                    <label>Password:</label>
//                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                </div>
//                <div>
//                    <label>Email:</label>
//                    <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
//                </div>
//                <div>
//                    <label>First Name:</label>
//                    <input type="text" value={userFirstName} onChange={(e) => setUserFirstName(e.target.value)} required />
//                </div>
//                <div>
//                    <label>Last Name:</label>
//                    <input type="text" value={userLastName} onChange={(e) => setUserLastName(e.target.value)} required />
//                </div>
//                <div>
//                    <label>Phone Number:</label>
//                    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
//                </div>
//                <div>
//                    <label>User Type:</label>
//                    <select value={userType} onChange={(e) => setUserType(e.target.value)}>
//                        <option value="user">User</option>
//                        <option value="admin">Admin</option>
//                    </select>
//                </div>
//                <div>
//                    <label>
//                        <input
//                            type="checkbox"
//                            checked={confirmRegistration}
//                            onChange={(e) => setConfirmRegistration(e.target.checked)}
//                        />
//                        Confirm Registration
//                    </label>
//                </div>
//                <button type="submit">Register</button>
//            </form>
//        </div>
//    );
//};
//
//export default Register;

import React, { useState } from 'react';
import AuthService from '../services/AuthService';
import '../styles/register.css'; // Ensure the path is correct
import Navbar from './Navbar';
const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userType, setUserType] = useState('user'); // Default to 'user'
    const [confirmRegistration, setConfirmRegistration] = useState(false);
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const user = {
                username,
                password,
                userEmail,
                userFirstName,
                userLastName,
                phoneNumber,
                userType,
                confirmRegistration
            };
            const response = await AuthService.register(user);
            setMessage('Registration successful! Please check your email to confirm your registration.');
            console.log(response.data);
        } catch (error) {
            console.error('Registration failed', error);
            setMessage('Registration failed. Please try again.');
        }
    };

    return (
        <div>
        <Navbar/>
        <div className="content">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="register-password">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
                </div>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={userFirstName} onChange={(e) => setUserFirstName(e.target.value)} required />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={userLastName} onChange={(e) => setUserLastName(e.target.value)} required />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                </div>
                <div>
                    <label>User Type:</label>
                    <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={confirmRegistration}
                            onChange={(e) => setConfirmRegistration(e.target.checked)}
                        />
                        Confirm Registration
                    </label>
                </div>
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
        </div>

    );
};

export default Register;
//
