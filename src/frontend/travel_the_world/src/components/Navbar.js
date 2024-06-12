import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ShopTravelDropdown from './ShopTravelDropdown';
import ServiceTravelDropdown from './ServiceTravelDropdown';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Travel The World</div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>

                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                 <li className="nav-item">
                    <ShopTravelDropdown />
                  </li>

                   <li className="nav-item">
                     <ServiceTravelDropdown />
                   </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/my-plan">My Plan</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
