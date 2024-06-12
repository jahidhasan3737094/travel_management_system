import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ShopTravelDropdown.css';

const ShopTravelDropdown = () => {
    return (
        <div className="dropdown">
            <button className="dropbtn">Shop Travel</button>
            <div className="dropdown-content">
                <Link className="dropdown-item" to="/flight">Flight</Link>
                <Link className="dropdown-item" to="/stay">Stay</Link>
                <Link className="dropdown-item" to="/packages">Packages</Link>
                <Link className="dropdown-item" to="/deals">Deals</Link>
            </div>
        </div>
    );
};

export default ShopTravelDropdown;
