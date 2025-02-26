//// src/components/Navbar.js
//
//import React, { useContext, useEffect } from 'react';
//import { Link, useNavigate } from 'react-router-dom';
//import '../styles/Navbar.css';
//import ShopTravelDropdown from './ShopTravelDropdown';
//import ServiceTravelDropdown from './ServiceTravelDropdown';
//import { AuthContext } from '../contexts/AuthContext'; // Import AuthContext
//
//const Navbar = () => {
//    const { isLoggedIn, logout, loading } = useContext(AuthContext); // Use AuthContext
//    const navigate = useNavigate();
//
//    useEffect(() => {
//        // Handle scroll position logic here
//    }, []);
//
//    const handleLogout = async () => {
//        try {
//            await logout(); // Call logout from context
//            navigate('/login');
//        } catch (error) {
//            console.error('Logout failed', error);
//        }
//    };
//
//    if (loading) return <div>Loading...</div>; // Optionally handle loading state
//
//    return (
//        <nav id="user-navbar" className="user-navbar">
//            <div className="user-navbar-brand">Travel The World</div>
//            <ul className="user-navbar-links">
//                <li><Link to="/">Home</Link></li>
//                {isLoggedIn ? (
//                    <>
//                        <li><Link to="/profile/info">My Profile</Link></li>
//                         <li className="nav-item">
//                          <Link className="nav-link" to="/upload-review">UploadReview</Link>
//                         </li>
//                    </>
//                ) : (
//                    <>
//                        <li><Link to="/login">Login</Link></li>
//                        <li><Link to="/register">Register</Link></li>
//                           <li className="nav-item">
//                            <Link className="nav-link" to="/reviews">Reviews</Link>
//                           </li>
//                    </>
//                )}
//
//                <li className="nav-item">
//                    <ShopTravelDropdown />
//                </li>
//                <li className="nav-item">
//                    <ServiceTravelDropdown />
//                </li>
//
//                <li className="nav-item">
//                    <Link className="nav-link" to="/contact">Contact</Link>
//                </li>
//
//                 {isLoggedIn ? (
//                                    <>
//
//                                        <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
//
//                                    </>
//                                ) : (
//                                    <>
//
//                                    </>
//                                )}
//            </ul>
//        </nav>
//    );
//};
//
//export default Navbar;
////
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import ShopTravelDropdown from "./ShopTravelDropdown";
import ServiceTravelDropdown from "./ServiceTravelDropdown";
import { AuthContext } from "../contexts/AuthContext"; // Ensure correct import

const Navbar = () => {
    const { authState, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const isAuthenticated = authState?.isAuthenticated || false;
    const user = authState?.user || null;

    const handleLogout = async () => {
        try {
            logout();
            navigate("/login");
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">Explore The World</div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                {isAuthenticated ? (
                    <>
                        <li><Link to="/profile/info">My Profile</Link></li>
                        <li><Link to="/upload-review">Upload Review</Link></li>
                        <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/reviews">Reviews</Link></li>
                    </>
                )}
                <li className="nav-item">
                    <ShopTravelDropdown />
                </li>
                <li className="nav-item">
                    <ServiceTravelDropdown />
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
