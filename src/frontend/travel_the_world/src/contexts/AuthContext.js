//import React, { createContext, useState, useEffect } from 'react';
//import AuthService from '../services/AuthService';
//
//const AuthContext = createContext();
//
//const AuthProvider = ({ children }) => {
//    const [isLoggedIn, setIsLoggedIn] = useState(false);
//    const [loading, setLoading] = useState(true);
//
//    useEffect(() => {
//        const checkAuth = async () => {
//            try {
//                const token = localStorage.getItem('token');
//                if (token) {
//                    await AuthService.validateToken(token); // Ensure AuthService.validateToken is implemented correctly
//                    setIsLoggedIn(true);
//                } else {
//                    setIsLoggedIn(false);
//                }
//            } catch (error) {
//                setIsLoggedIn(false);
//            } finally {
//                setLoading(false);
//            }
//        };
//
//        checkAuth();
//    }, []);
//
//    const login = async (username, password) => {
//        try {
//            const response = await AuthService.login(username, password);
//            localStorage.setItem('token', response.data.token);
//            setIsLoggedIn(true);
//        } catch (error) {
//            throw new Error('Login failed');
//        }
//    };
//
//    const logout = async () => {
//        try {
//            await AuthService.logout(); // Ensure AuthService.logout is implemented correctly
//            localStorage.removeItem('token');
//            setIsLoggedIn(false);
//        } catch (error) {
//            console.error('Logout failed', error);
//        }
//    };
//
//    return (
//        <AuthContext.Provider value={{ isLoggedIn, login, logout, loading }}>
//            {children}
//        </AuthContext.Provider>
//    );
//};
//
////export { AuthContext, AuthProvider };
//import React, { useContext, useEffect, useState } from "react";
//import { Link, useNavigate } from "react-router-dom";
//import "../styles/Navbar.css";
//import ShopTravelDropdown from "./ShopTravelDropdown";
//import ServiceTravelDropdown from "./ServiceTravelDropdown";
//import { AuthContext } from "../components/AuthContext";
//
//const Navbar = () => {
//    const { isAuthenticated, user, logout } = useContext(AuthContext);
//    const navigate = useNavigate();
//    const [authStatus, setAuthStatus] = useState(isAuthenticated); // Track authentication status
//
//    useEffect(() => {
//        setAuthStatus(isAuthenticated); // Update state when authentication changes
//    }, [isAuthenticated]);
//
//    const handleLogout = async () => {
//        try {
//            logout();
//            navigate("/login");
//        } catch (error) {
//            console.error("Logout failed", error);
//        }
//    };
//
//    return (
//        <nav id="user-navbar" className="user-navbar">
//            <div className="user-navbar-brand">Explore The World</div>
//            <ul className="user-navbar-links">
//                <li><Link to="/">Home</Link></li>
//                {authStatus ? ( // Ensure UI updates dynamically
//                    <>
//                        <li><Link to="/profile/info">My Profile</Link></li>
//                        <li><Link to="/upload-review">Upload Review</Link></li>
//                        <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
//                    </>
//                ) : (
//                    <>
//                        <li><Link to="/login">Login</Link></li>
//                        <li><Link to="/register">Register</Link></li>
//                        <li><Link to="/reviews">Reviews</Link></li>
//                    </>
//                )}
//                <li className="nav-item">
//                    <ShopTravelDropdown />
//                </li>
//                <li className="nav-item">
//                    <ServiceTravelDropdown />
//                </li>
//                <li className="nav-item">
//                    <Link className="nav-link" to="/contact">Contact</Link>
//                </li>
//            </ul>
//        </nav>
//    );
//};
//
//export default Navbar;
//import React, { createContext, useState, useEffect, useContext } from "react";
//
//export const AuthContext = createContext();
//
//export const AuthProvider = ({ children }) => {
//    const [authState, setAuthState] = useState({
//        isAuthenticated: false,
//        user: null,
//    });
//
//    useEffect(() => {
//        const storedUser = localStorage.getItem("user");
//        const token = localStorage.getItem("token");
//
//        if (storedUser && token) {
//            setAuthState({
//                isAuthenticated: true,
//                user: JSON.parse(storedUser),
//            });
//        }
//    }, []);
//
//    const login = (user, token) => {
//        localStorage.setItem("user", JSON.stringify(user));
//        localStorage.setItem("token", token);
//        setAuthState({ isAuthenticated: true, user });
//    };
//
//    const logout = () => {
//        localStorage.removeItem("user");
//        localStorage.removeItem("token");
//        setAuthState({ isAuthenticated: false, user: null });
//    };
//
//    return (
//        <AuthContext.Provider value={{ authState, login, logout }}>
//            {children}
//        </AuthContext.Provider>
//    );
//};
//
//// Custom hook for consuming AuthContext
//export const useAuth = () => useContext(AuthContext);
//user work perfectly till here.
//import React, { createContext, useState, useEffect, useContext } from "react";
//
//export const AuthContext = createContext();
//
//export const AuthProvider = ({ children }) => {
//    const [authState, setAuthState] = useState({
//        isAuthenticated: false,
//        user: null,
//        isAdmin: false,
//    });
//
//    useEffect(() => {
//        // Load user and admin authentication state separately
//        const storedUser = localStorage.getItem("user");
//        const userToken = localStorage.getItem("token");
//        const storedAdmin = localStorage.getItem("admin");
//        const adminToken = localStorage.getItem("adminToken");
//
//        if (storedUser && userToken) {
//            setAuthState({
//                isAuthenticated: true,
//                user: JSON.parse(storedUser),
//                isAdmin: false, // Normal user is not an admin
//            });
//        } else if (storedAdmin && adminToken) {
//            setAuthState({
//                isAuthenticated: true,
//                user: JSON.parse(storedAdmin),
//                isAdmin: true, // Admin is authenticated separately
//            });
//        }
//    }, []);
//
//    const login = (user, token, isAdmin = false) => {
//        if (isAdmin) {
//            localStorage.setItem("admin", JSON.stringify(user));
//            localStorage.setItem("adminToken", token);
//        } else {
//            localStorage.setItem("user", JSON.stringify(user));
//            localStorage.setItem("token", token);
//        }
//        setAuthState({ isAuthenticated: true, user, isAdmin });
//    };

//    const logout = () => {
//        if (authState.isAdmin) {
//            localStorage.removeItem("admin");
//            localStorage.removeItem("adminToken");
//        } else {
//            localStorage.removeItem("user");
//            localStorage.removeItem("token");
//        }
//        setAuthState({ isAuthenticated: false, user: null, isAdmin: false });
//    };
//
//    return (
//        <AuthContext.Provider value={{ authState, login, logout }}>
//            {children}
//        </AuthContext.Provider>
//    );
//};
//
//// Custom hook for consuming AuthContext
//export const useAuth = () => useContext(AuthContext);
import React, { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        user: null,
        isAdmin: false,
    });

    useEffect(() => {
        // Load user and admin authentication state separately
        const storedUser = localStorage.getItem("user");
        const userToken = localStorage.getItem("token");
        const storedAdmin = localStorage.getItem("admin");
        const adminToken = localStorage.getItem("adminToken");

        if (storedUser && userToken) {
            setAuthState({
                isAuthenticated: true,
                user: JSON.parse(storedUser),
                isAdmin: false, // Normal user is not an admin
            });
        } else if (storedAdmin && adminToken) {
            setAuthState({
                isAuthenticated: true,
                user: JSON.parse(storedAdmin),
                isAdmin: true, // Admin is authenticated separately
            });
        }
    }, []);

    const login = (user, token, isAdmin = false) => {
        if (isAdmin) {
            localStorage.setItem("admin", JSON.stringify(user));
            localStorage.setItem("adminToken", token);
        } else {
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", token);
        }
        setAuthState({ isAuthenticated: true, user, isAdmin });
    };

    const logout = () => {
        if (authState.isAdmin) {
            localStorage.removeItem("admin");
            localStorage.removeItem("adminToken");
        } else {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        }
        setAuthState({ isAuthenticated: false, user: null, isAdmin: false });
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook for consuming AuthContext
export const useAuth = () => useContext(AuthContext);
