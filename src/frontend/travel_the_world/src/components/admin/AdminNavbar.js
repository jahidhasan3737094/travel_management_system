import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/admin/adminNavbar.css'; // Make sure this path is correct
const AdminNavbar = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const navigate = useNavigate();

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

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        navigate(`/admin/${tabName.toLowerCase()}`);
    };

    return (
        <nav id="navbar" className="navbar">

            <div className="navbar-brand">Admin Panel</div>
            <ul className="navbar-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/my-plan">My Plan</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>

                        </ul>
            <div className="tab">
                <button className={`tablinks ${activeTab === 'Home' ? 'active' : ''}`} onClick={() => handleTabClick('Home')}>Home</button>
                <button className={`tablinks ${activeTab === 'London' ? 'active' : ''}`} onClick={() => handleTabClick('UserQuery')}>UserQuery</button>
                <button className={`tablinks ${activeTab === 'Paris' ? 'active' : ''}`} onClick={() => handleTabClick('Paris')}>Paris</button>
                <button className={`tablinks ${activeTab === 'Tokyo' ? 'active' : ''}`} onClick={() => handleTabClick('Tokyo')}>Tokyo</button>
            </div>
        </nav>
    );
};

export default AdminNavbar;
