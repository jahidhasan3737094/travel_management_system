import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServiceTravelDropdown.css';

const ServiceTravelDropdown = () => {
    return (
        <div className="dropdown">
            <button className="dropbtn">Service to Travel</button>
            <div className="dropdown-content">
                <Link className="dropdown-item" to="/visa-service">Visa Service</Link>
                <Link className="dropdown-item" to="/passport-service">Passport Service</Link>
                <Link className="dropdown-item" to="/immigration-service">Immigration Service</Link>
            </div>
        </div>
    );
};

export default ServiceTravelDropdown;
