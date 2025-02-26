////import React, { useState, useContext } from "react";
////import { useNavigate } from "react-router-dom";
////import AuthService from "../services/AuthService";
////import { AuthContext } from "../components/AuthContext";
////import "../styles/login.css";
////import Navbar from "./Navbar";
////import Slideshow from "./Slideshow";
////
////const Login = () => {
////    const [loginUsername, setLoginUsername] = useState("");
////    const [loginPassword, setLoginPassword] = useState("");
////    const [loginError, setLoginError] = useState(null);
////    const { login } = useContext(AuthContext);
////    const navigate = useNavigate();
////
////    const handleLogin = async (e) => {
////        e.preventDefault();
////        try {
////            const response = await AuthService.login(loginUsername, loginPassword);
////
////            console.log("Login Response:", response); // Debug response structure
////
////            if (!response || !response.token || !response.user) {
////                throw new Error("Invalid login response. Token or user missing.");
////            }
////
////            localStorage.setItem("token", response.token);
////            localStorage.setItem("userEmail", response.user.email);
////            localStorage.setItem("username", response.user.username);
////
////            login(response.user);
////            navigate("/profile/info");
////        } catch (err) {
////            console.error("Login failed:", err);
////            setLoginError("Invalid credentials. Please try again.");
////        }
////    };
////
////    return (
////        <div>
////            <Navbar />
////            <Slideshow />
////            <h2 className="login-title">Explore the World: Your All-in-One Travel Companion Plan, Book, Explore!</h2>
////            <div className="login-container">
////                <h2 className="login-heading">Login</h2>
////                <form className="login-form" onSubmit={handleLogin}>
////                    <div className="login-form-group">
////                        <label className="login-label">Email:</label>
////                        <input
////                            className="login-input"
////                            type="text"
////                            value={loginUsername}
////                            onChange={(e) => setLoginUsername(e.target.value)}
////                            required
////                        />
////                    </div>
////                    <div className="login-form-group">
////                        <label className="login-label">Password:</label>
////                        <input
////                            className="login-input"
////                            type="password"
////                            value={loginPassword}
////                            onChange={(e) => setLoginPassword(e.target.value)}
////                            required
////                        />
////                    </div>
////                    {loginError && <div className="login-error-message">{loginError}</div>}
////                    <button className="login-button" type="submit">Login</button>
////                </form>
////            </div>
////        </div>
////    );
////};
////
////export default Login;
//
//import React, { useState, useContext } from "react";
//import { useNavigate } from "react-router-dom";
//import AuthService from "../services/AuthService";
//import { AuthContext } from "../components/AuthContext";
//import "../styles/login.css";
//import Navbar from "./Navbar";
//import Slideshow from "./Slideshow";
//
//const Login = () => {
//    const [loginUsername, setLoginUsername] = useState("");
//    const [loginPassword, setLoginPassword] = useState("");
//    const [loginError, setLoginError] = useState(null);
//    const { login, isLoggedIn } = useContext(AuthContext);
//    const navigate = useNavigate();
//
//    const handleLogin = async (e) => {
//        e.preventDefault();
//        try {
//            const response = await AuthService.login(loginUsername, loginPassword);
//
//            if (!response || !response.token || !response.user) {
//                throw new Error("Invalid login response. Token or user missing.");
//            }
//
//            localStorage.setItem("token", response.token);
//            localStorage.setItem("userEmail", response.user.email);
//            localStorage.setItem("username", response.user.username);
//
//            login(response.user);
//            navigate("/profile/info");
//        } catch (err) {
//            console.error("Login failed:", err);
//            setLoginError("Invalid credentials. Please try again.");
//        }
//    };
//
//    return (
//        <div>
//            <Navbar />
//            <Slideshow />
//            <h2 className="login-title">Explore the World: Your All-in-One Travel Companion Plan, Book, Explore!</h2>
//            <div className="login-container">
//                <h2 className="login-heading">Login</h2>
//                <form className="login-form" onSubmit={handleLogin}>
//                    <div className="login-form-group">
//                        <label className="login-label">Email:</label>
//                        <input
//                            className="login-input"
//                            type="text"
//                            value={loginUsername}
//                            onChange={(e) => setLoginUsername(e.target.value)}
//                            required
//                        />
//                    </div>
//                    <div className="login-form-group">
//                        <label className="login-label">Password:</label>
//                        <input
//                            className="login-input"
//                            type="password"
//                            value={loginPassword}
//                            onChange={(e) => setLoginPassword(e.target.value)}
//                            required
//                        />
//                    </div>
//                    {loginError && <div className="login-error-message">{loginError}</div>}
//                    <button className="login-button" type="submit">Login</button>
//                </form>
//            </div>
//        </div>
//    );
//};
//
//export default Login;

//
//import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
//import AuthService from "../services/AuthService";
//import { useAuth } from "../contexts/AuthContext";
//import "../styles/login.css";
//import Navbar from "./Navbar";
//import Slideshow from "./Slideshow";
//
//const Login = () => {
//    const [username, setUsername] = useState("");
//    const [password, setPassword] = useState("");
//    const [error, setError] = useState(null);
//    const { login } = useAuth();
//    const navigate = useNavigate();
//
//    const handleLogin = async (e) => {
//        e.preventDefault();
//        try {
//            const response = await AuthService.login(username, password);
//
//            if (!response || !response.token || !response.user) {
//                throw new Error("Invalid login response. Token or user missing.");
//            }
//
//            login(response.user, response.token);
//            navigate("/profile/info");
//        } catch (err) {
//            console.error("Login failed:", err);
//            setError("Invalid credentials. Please try again.");
//        }
//    };
//
//    return (
//        <div>
//            <Navbar />
//            <Slideshow />
//            <h2>Explore the World: Your All-in-One Travel Companion Plan, Book, Explore!</h2>
//            <div className="login-container">
//                <h2>Login</h2>
//                <form onSubmit={handleLogin}>
//                    <div className="login-form-group">
//                        <label className="login-label">Email:</label>
//                        <input
//                            type="text"
//                            className="login-input"
//                            value={username}
//                            onChange={(e) => setUsername(e.target.value)}
//                            required
//                        />
//                    </div>
//                    <div className="login-form-group">
//                        <label className="login-label">Password:</label>
//                        <input
//                            type="password"
//                            className="login-input"
//                            value={password}
//                            onChange={(e) => setPassword(e.target.value)}
//                            required
//                        />
//                    </div>
//                    {error && <div className="login-error-message">{error}</div>}
//                    <button type="submit" className="login-button">Login</button>
//                </form>
//            </div>
//        </div>
//    );
//};
//
//export default Login;

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import { AuthContext } from "../contexts/AuthContext"; // Ensure correct import
import "../styles/login.css";
import Navbar from "./Navbar";
import Slideshow from "./Slideshow";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await AuthService.login(username, password);

           // console.log("Login Response:", response); // Debug response structure

            if (!response || !response.token || !response.user) {
                throw new Error("Invalid login response. Token or user missing.");
            }

            login(response.user, response.token); // ✅ Updates AuthContext
            navigate("/profile/info"); // ✅ Redirect after login
        } catch (err) {
            console.error("Login failed:", err);
            setError("Invalid credentials. Please try again.");
        }
    };

    return (
        <div>
            <Navbar />
            <Slideshow />
            <h2>Explore the World: Your All-in-One Travel Companion Plan, Book, Explore!</h2>
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="login-form-group">
                        <label className="login-label">Email:</label>
                        <input
                            type="text"
                            className="login-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="login-form-group">
                        <label className="login-label">Password:</label>
                        <input
                            type="password"
                            className="login-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div className="login-error-message">{error}</div>}
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
