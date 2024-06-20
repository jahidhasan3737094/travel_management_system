import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ShopTravelDropdown from './ShopTravelDropdown';
import ServiceTravelDropdown from './ServiceTravelDropdown';

const Navbar = () => {
    useEffect(() => {
        let prevScrollpos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const navbar = document.getElementById("navbar");

            if (prevScrollpos > currentScrollPos) {
                navbar.style.top = "0";
            } else {
                navbar.style.top = "-90px";
            }
            prevScrollpos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav id="navbar" className="navbar">
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
